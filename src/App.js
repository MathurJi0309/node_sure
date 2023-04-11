import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Productdetail from "./Components/Productdetail";

// ........................................................code for the App ....................................................................


function App() {
  const baseURL="https://dummyjson.com/products"
  const [loading, setLoding] = useState(false);
  const [products, setProducts] = useState({});
  const [prodetail, setProdetail] = useState({});
  const [id, setId] = useState();
  let realproduct = {};

// ........................................................code for the fetch data ....................................................................



  const fetch=async()=>{
    const response = await axios.get(`${baseURL}`, {
      crossdomain: true,
    });
    realproduct = response.data;
    setProducts(response.data);
    setLoding(false);
  }



  const fetchproduct = async () => {
    console.log("data fetching........")
    setLoding(true);
   fetch();
    
  };
  useEffect(() => {
    fetchproduct();
  }, []);


// ........................................................code for the search in list ....................................................................



  const search = (param) => {

    const featchsearch = async (param) => {
      console.log("data Searching........")
      setLoding(true);
      const response = await axios.get(
        `${baseURL}/search?q=${param}`
      );
      if (param !== "") {
        setProducts(response.data);
      } else {
        setProducts(realproduct);
      }
      setLoding(false);
    };
    featchsearch(param);
  };


// ........................................................code for the fetch detail ....................................................................



  const detail = (id) => {
    const pro = products.products.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setProdetail(pro[0]);
    const fetchdetail = async (id) => {
      const response = await axios.get(`${baseURL}/${id}`);
      setProdetail(response.data);
    };
    fetchdetail(id);
    setId(id);
  };


// ........................................................code for the update list by clicking on the name....................................................................


  const update = async (x) => {
    console.log("data fetching........")
    setLoding(x);
    fetch()
  };



  return (
    <div >
      {loading ? (
        <div className="d-flex flex-col justify-content-center align-items-center loader">
          <CircularProgress color="secondary" />
          <div>Loading.......</div>
        </div>
      ) : (
        <Router>
          <Navbar search={search} update={update} />
          <div style={{ paddingTop: "60px" }}>
            <Routes>
              <Route
                excat
                path="/"
                element={
                  !loading && (
                    <ProductList products={products} detail={detail} />
                  )
                }
              />
              <Route
                excat
                path={`/${id}`}
                element={<Productdetail product={prodetail} />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
