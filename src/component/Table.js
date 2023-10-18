import React from "react";
import "./mainContent.css"

function Table() {
  return (
    <table className="table my-3 ">
      <thead>
        <tr>
          <th scope="col" style={{fontSize:"10px", color:"#d9d9d9"}}>Product Name</th>
          <th scope="col" className="text-center" style={{fontSize:"10px", color:"#d9d9d9"}}>Stock</th>
          <th scope="col" className="text-center" style={{fontSize:"10px",color:"#d9d9d9"}}>Price</th>
          <th scope="col" className="text-center" style={{fontSize:"10px",color:"#d9d9d9"}}>Total sales</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td className=" firstrow">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.IboBZwgo1TIVJfUKAwQSzQHaEo&pid=Api&P=0&h=180"
              alt="Image1"
              className="img-thumbnail"
              style={{ height: "70px", width: "100px", borderRadius: "10px" }}
            />
            <div className="d-flex justify-content-center flex-column">
              <h5 style={{margin:"0px", fontSize:"15px"}}>Abstract 3d</h5>
              <p style={{margin:"0px", fontSize:"10px", color:"#d9d9d9"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </td>
          <td className="text-center" style={{fontSize:"10px", verticalAlign:"middle"}}>32 in stock</td>
          <td className="text-center fw-bold" style={{fontSize:"10px", verticalAlign:"middle"}} >$ 45.99</td>
          <td className="text-center" style={{fontSize:"10px", verticalAlign:"middle"}}>20</td>
        </tr>
        <tr>
        <td className="firstrow">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP._jxOykmiGnlX2e_HTVXT3gHaEK&pid=Api&P=0&h=180"
              alt="Image2"
              className="img-thumbnail"
              style={{ height: "70px", width: "100px", borderRadius: "10px" }}
            />
            <div className="d-flex justify-content-center flex-column">
              <h5 style={{margin:"0px", fontSize:"15px"}}>Sarphens Illustrations</h5>
              <p style={{margin:"0px", fontSize:"10px" , color:"#d9d9d9"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </td>
          <td className="text-center" style={{fontSize:"12px", verticalAlign:"middle"}}>32 in stock</td>
          <td className="text-center fw-bold" style={{fontSize:"12px", verticalAlign:"middle"}}>$ 45.99</td>
          <td className="text-center" style={{fontSize:"12px", verticalAlign:"middle"}}>20</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
