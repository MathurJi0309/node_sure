import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Components/ProductList";
import Loder from "./Components/Loder";
import Navbar from "./Components/Navbar";
import CircularProgress from '@mui/material/CircularProgress';

import Productdetail from "./Components/Productdetail";

function App() {
  const [loading, setLoding] = useState(false);
  const [products, setProducts] = useState({});
  const [index, setIndex] = useState(true);
  const [prodetail, setProdetail] = useState({});
  const [id, setId] = useState();
  const fetchproduct = async () => {
    setLoding(true);
    const response = await axios.get("https://dummyjson.com/products");

    console.log("i am first", response);
    setProducts(response.data);
    setLoding(false);
    setIndex(false);
  };
  useEffect(() => {
    fetchproduct();
    console.log("hi i a m here", products);
  }, []);
  console.log("ha le luyiya", products);
  const search = (param) => {
    const featchsearch = async (param) => {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${param}`
      );
      setProducts(response.data);
      console.log("hi i am param", products);
    };
    featchsearch(param);
  };
  const detail = (id) => {
    setIndex(true);
    const pro = products.products.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setProdetail(pro[0]);
    console.log("pro 48", pro[0]);
    console.log("prodetail", prodetail);
    const fetchdetail = async (id) => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log("i am in the pro", response.data);
      setProdetail(response.data);
    };
    fetchdetail(id);
    setId(id);
  };

  return (
    <div >
      {loading ?    (<div className="d-flex justify-content-center align-items-center loader">
        <CircularProgress color="secondary" />
        </div>):
        (

      <Router>
        <Navbar search={search} />
        <div style={{paddingTop:'50px'}}>

        <Routes>
          <Route
            excat
            path="/"
            element={
              !loading && <ProductList products={products} detail={detail}  />
            }
          />
          <Route
            excat
            path={`/${id}`}
            element={<Productdetail product={prodetail} />}
          />
        </Routes>
        </div>
      </Router>
        )}
    </div>
  );
}

export default App;
