import React from "react";
import { FaSearch } from "react-icons/fa";
import Table from "./Table";

function SegmentFour() {
  return (
    <div className="p-3" style={{backgroundColor:"white", borderRadius:"10px"}}>
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="fw-bold" style={{margin:"0", fontSize:"15px"}}>Product Sell</h5>
        <div className="d-flex ">
          <form className="d-flex">
            <div
              className="input-group searchBar"
              style={{ position: "relative" }}
            >
              <input
                className="form-control me-2 px-4"
                type="search"
                placeholder="Search"
                style={{ borderRadius: "5px", fontSize: "10px" ,  color:"#d9d9d9" }}
              />
              <span
                className="searchIcon pe-3"
                style={{ position: "absolute", top: "5%", left: "10px" }}
              >
                <FaSearch style={{ fontSize: "12px" }} />
              </span>
            </div>
          </form>
          <button className="btn">
            <select style={{ border: "none", width: "90px", fontSize: "10px",  color:"#d9d9d9" }}>
              <option value="" selected disabled>
                Last 30 days
              </option>{" "}

              <option value="Q4">Last 7 days</option>
              <option value="Q1">Last 30 days</option>
              <option value="Q2">Last 6 months</option>
              <option value="Q3">Last 1 year</option>
              
            </select>
          </button>
        </div>
      </div>
      <div>
        <Table/>
      </div>
    </div>
  );
}

export default SegmentFour;
