import React from "react";
import "./mainContent.css";
import Bars from "./Bars";

function SegmentThree() {
  const barData = [
    { height: "100px", width: "30px", month: "Jan", backgroundColor: "#efefef" },
    { height: "80px", width: "30px", month: "Feb", backgroundColor: "#efefef" },
    { height: "120px", width: "30px", month: "Mar", backgroundColor: "#efefef" },
    { height: "90px", width: "30px", month: "Apr", backgroundColor: "#efefef" },
    { height: "110px", width: "30px", month: "May", backgroundColor: "#efefef" },
    { height: "140px", width: "30px", month: "Jun", backgroundColor: "#efefef" },
    { height: "160px", width: "30px", month: "Jul", backgroundColor: "#efefef" },
    { height: "180px", width: "30px", month: "Aug", backgroundColor: "#f530f4" },
    { height: "160px", width: "30px", month: "Sep", backgroundColor: "#efefef" },
    { height: "150px", width: "30px", month: "Oct", backgroundColor: "#efefef" },
    { height: "130px", width: "30px", month: "Nov", backgroundColor: "#efefef" },
    { height: "110px", width: "30px", month: "Dec", backgroundColor: "#efefef" },
  ];

  return (
    <div className="segmentThree p-3 ">
      <div className="leftPart p-2">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="p-2">
            <h5 className="fw-bold" style={{ margin: "0", fontSize:"15px" }}>Overview</h5>
            <p style={{ margin: "0", fontSize: "10px", color:"#d9d9d9"}}>Monthly earning</p>
          </div>
          <button className="btn">
            <select style={{ border: "none", width: "90px", fontSize: "10px", color:"#a0a0a0"}}>
              <option value="" selected disabled >
                Quaterly
              </option>{" "}
              <option value="Q1">Q1 - January to March</option>
              <option value="Q2">Q2 - April to June</option>
              <option value="Q3">Q3 - July to September</option>
              <option value="Q4">Q4 - October to December</option>
            </select>
          </button>
        </div>

        <div className="container p-2">
          <div className="d-flex justify-content-between">
            {barData.map((bar, index) => (
              <div key={index}>
                <Bars
                  height={bar.height}
                  width={bar.width}
                  month={bar.month}
                  backgroundColor={bar.backgroundColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
      className="rightPart"
        style={{ backgroundColor: "white",  borderRadius: "10px" }}
      >
        <div className="p-2">
          <h5 className="fw-bold" style={{ margin: "0", fontSize:"15px" }}>Customers</h5>
          <p style={{ margin: "0", fontSize: "10px", color:"#d9d9d9" }}>
            Customers that buy products
          </p>
        </div>
        <div className="container">
          <div className="donut-chart-block block">
            <div className="donut-chart">
              <div id="section1" className="clip">
                <div className="item" data-rel="21"></div>
              </div>
              <div id="section2" className="clip">
                <div className="item" data-rel="39"></div>
              </div>
              <div id="section3" className="clip">
                <div className="item" data-rel="31"></div>
              </div>
              <div id="section4" className="clip">
                <div className="item" data-rel="9"></div>
              </div>
              <div className="center text-center d-flex flex-column align-items-center justify-content-center ">
                <h5 className=" fw-bold fs-5" style={{margin:"0"}}>65%</h5>
                <p  className="fw-bold" style={{fontSize:"10px", margin:"0"}}>Total New</p>
                <p  className="fw-bold" style={{fontSize:"10px", margin:"0"}}>Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SegmentThree;
