import React, { useState } from "react";
import { useNavigate } from "react-router";

// ........................................................code for the Navbar ....................................................................


const Navbar = (props) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


// .................................................handle change the inpute from search ....................................................................


  const handleChange = (e) => {
    setInput(e.target.value);
  };


// ........................................................code for the handle click button....................................................................




  const handleClick = (e) => {
    e.preventDefault();
    props.search(input);
    navigate("/");
  };

// ........................................................code for the handle the company name....................................................................


  const handleCliick = () => {
    navigate("/");
    props.update(true);
  };



  return (
    <div className="position-fixed" style={{ width: "100vw", zIndex: "300"}}>
      <nav className="navbar navbar-light bg-light">
        <div
          style={{ color: "darkBlue", cursor: "pointer" }}
          onClick={handleCliick}
        >
          <h2>Node_Sure</h2>
        </div>
        <form className="form-inline">
          <input
            className="form-control "
            type="search"
            placeholder="Search Here..."
            aria-label="Search"
            name={input}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-success my-1 my-sm-0"
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
