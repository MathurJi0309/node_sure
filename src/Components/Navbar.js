import React, { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = (props) => {
  const [input, setInput] = useState("");
  const [param, setParam] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.search(input);
    console.log(param);
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder={param}
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
