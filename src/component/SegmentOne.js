import React from 'react'
import "./mainContent.css"
import { FaSearch } from 'react-icons/fa';


function SegmentOne() {
  return (
    <div>
    <nav className="navbar">
      <div className="container-fluid">
        <h5 className="navbar-brand">hello Swarnava 👋,</h5>
        <form className="d-flex">
          <div className="input-group searchBar"style={{position:"relative"}} >
          <input className="form-control me-2 px-4" type="search" placeholder="Search" style={{borderRadius:"5px", fontSize:"12px"}}/>
            <span className="searchIcon pe-3" style={{position:"absolute",top:"5%",left:"10px"}}>
              <FaSearch  style={{fontSize:"12px"}}/>
            </span>
          
          </div>
        </form>
      </div>
    </nav>
    </div>
  )
}

export default SegmentOne
