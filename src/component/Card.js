import React from "react";
import {
  FaDollarSign,
  FaArrowDown,
  FaArrowUp,
  
  FaShoppingBag,
  FaMoneyBill,
} from "react-icons/fa";
import { VscNotebook } from "react-icons/vsc";

function Card({
  backgroundColor,
  iconName,
  earning,
  isIncrement,
  amount,
  info1,
  color
}) {
  const cardStyle = {
    backgroundColor:backgroundColor,
    color: color,
  };

  const getIcon = () => {
    switch (iconName) {
      case "FaDollarSign":
        return <FaDollarSign size={30} />;

      case "VscNotebook":
        return <VscNotebook size={30} />;
      case "FaShoppingBag":
        return <FaShoppingBag size={30} />;
      case "FaMoneyBill":
        return <FaMoneyBill size={30} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="d-flex flex-row align-items-center p-3 card">
        <div className="cardItem text-center " style={cardStyle}>
          {getIcon()}
        </div>
        <div className="cardInfo m-2">
          <p style={{ margin: "0", fontSize: "10px", color:"#abaaab" }}>{info1}</p>
          <h5 className="fw-bold" style={{ margin: "0" }}>{earning}</h5>
          <p style={{ margin: "0", fontSize: "8px" }}>
            {" "}
            <span>
              {isIncrement ? (
                <FaArrowUp color="green" />
              ) : (
                <FaArrowDown color="red" />
              )}
              {" "}
              {amount}
              %
            </span>
            {" "}
            this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
