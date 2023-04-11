import React, { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = (props) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();



  const handleChange = (e) => {
    setInput(e.target.value);
  };




  const handleClick = (e) => {
    e.preventDefault();
    props.search(input);
    navigate("/");
  };



  const handleCliick = () => {
    navigate("/");
    props.update(true);
  };


  
  return (
    <div className="position-fixed" style={{ width: "100vw", zIndex: "300" }}>
      <nav className="navbar navbar-light bg-light  d-flex justify-content-between">
        <div
          style={{ color: "darkBlue", cursor: "pointer" }}
          onClick={handleCliick}
        >
          <h2>Node_Sure</h2>
        </div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Here..."
            aria-label="Search"
            name={input}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
