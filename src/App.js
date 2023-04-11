import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";

import Productdetail from "./Components/Productdetail";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoding] = useState(false);
  const [products, setProducts] = useState({});
  const [prodetail, setProdetail] = useState({});
  const [id, setId] = useState();
  let realproduct = {};
  const fetchproduct = async () => {
    setLoding(true);
    const response = await axios.get("https://dummyjson.com/products", {
      crossdomain: true,
    });
    realproduct = response.data;
    setProducts(response.data);
    setLoding(false);
  };
  useEffect(() => {
    fetchproduct();
  }, []);
  const search = (param) => {
    const featchsearch = async (param) => {
      setLoding(true);
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${param}`
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
  const detail = (id) => {
    const pro = products.products.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setProdetail(pro[0]);
    const fetchdetail = async (id) => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProdetail(response.data);
    };
    fetchdetail(id);
    setId(id);
  };

  const update = async (x) => {
    setLoding(x);
    const response = await axios.get("https://dummyjson.com/products", {
      crossdomain: true,
    });
    realproduct = response.data;
    setProducts(response.data);
    setLoding(false);
  };
  return (
    <div>
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
