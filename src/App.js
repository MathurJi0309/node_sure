import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Components/ProductList";
import Loder from "./Components/Loder";
import Navbar from "./Components/Navbar";
import { colors } from "@mui/material";

function App() {
  const [loading, setLoding] = useState(false);
  const [products, setProducts] = useState({});
  const fetchproducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {console.log("awfawtatfsefsf",data)
    setProducts(data)});
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  console.log("ha le luyiya",products);
  const search=(param)=>{
    fetch(`https://dummyjson.com/products/search?q=${param}`)
.then(res => res.json())
.then(console.log);
  }
  return (
    <div>
      
      <Router>
        <Navbar search={search}/>
        <Routes>
          <Route excat path='/' element={<ProductList products={products}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
