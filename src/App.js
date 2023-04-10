import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import CircularProgress from '@mui/material/CircularProgress';

import Productdetail from "./Components/Productdetail";

function App() {
  const [loading, setLoding] = useState(false);
  const [products, setProducts] = useState({});
  const [prodetail, setProdetail] = useState({});
  const [id, setId] = useState();
  let realproduct={};
  const fetchproduct = async () => {
    setLoding(true);
    const response = await axios.get("https://dummyjson.com/products",{
      crossdomain: true
    });
    realproduct=response.data;
    console.log("i am first", realproduct);
    setProducts(response.data);
    setLoding(false);
  };
  useEffect(() => {
    fetchproduct();
    console.log("hi i a m here", products);
  }, []);
  console.log("ha le luyiya", products);
  const search = (param) => {
    const featchsearch = async (param) => {
      setLoding(true);
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${param}`
      );
      if(param!==''){
         setProducts(response.data);
      }
      else{
        setProducts(realproduct);
      }
      setLoding(false)
     
      console.log("hi i am param", products);
      
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

   const update=async(x)=>{
    console.log("hi i am node_sure",x)
    setLoding(x)
    const response = await axios.get("https://dummyjson.com/products",{
      crossdomain: true
    });
    realproduct=response.data;
    console.log("i am first", realproduct);
    setProducts(response.data);
    setLoding(false)
    console.log("hi i am node_sure",products)
   }
  return (
    <div >
      {loading ?    (<div className="d-flex flex-col justify-content-center align-items-center loader">
        <CircularProgress color="secondary" />
        <div>Loading.......</div>
        </div>):
        (

      <Router>
        <Navbar search={search} update={update}/>
        <div style={{paddingTop:'60px'}}>

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
