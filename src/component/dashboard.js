import React from "react";
import {
  FaHome,
  FaBox,
  FaUsers,
  FaMoneyBillAlt,
  FaBullhorn,
  FaQuestionCircle,
} from "react-icons/fa";
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { Dropdown } from "react-bootstrap";
import { RiHexagonLine } from "react-icons/ri";


import "./sidebar.css";

const Sidebar = () => {


 
    const menuItems = [
      { text: "Dashboard", icon: <FaHome /> },
      { text: "Product", icon: <FaBox /> },
      { text: "Customers", icon: <FaUsers /> },
      { text: "Income", icon: <FaMoneyBillAlt /> },
      { text: "Promote", icon: <FaBullhorn /> },
      { text: "Help", icon: <FaQuestionCircle /> },
    ];

  const icons = {
    Dashboard: <FaHome />,
    Product: <FaBox />,
    Customers: <FaUsers />,
    Income: <FaMoneyBillAlt />,
    Promote: <FaBullhorn />,
    Help: <FaQuestionCircle />,
  };

  const renderNavItems = () => {
    const navItems = [
      "Dashboard",
      "Product",
      "Customers",
      "Income",
      "Promote",
      "Help",
    ];

    return navItems.map((item) => (
      <li
        key={item}
        className={`p-3 my-2 d-flex align-items-center justify-content-between`}
      
        style={{ fontSize: "12px" }}
      >
        <span>
          {icons[item]} <span className="px-2">{item}</span>
        </span>
        <span>
          {" "}
          <BsArrowRight />
        </span>
      </li>
    ));
  };

  return (
    <>
    <div className="sidebar text-white">
      <div className="upper">
        <h4 className="logo p-3"><span>< RiHexagonLine /></span>{" "}Dashboard</h4>
        <div className="menu">
          <ul className="p-3">{renderNavItems()}</ul>
        </div>
      </div>
      <div
        className="lower p-3 mb-3 d-flex align-items-center mx-2"
        style={{ backgroundColor: "#8c96af", borderRadius:"10px" }}
      >
        <img
          src="https://tse1.explicit.bing.net/th?id=OIP.6JsUxhor4-ZVDTbr-xFvvgHaHa&pid=Api&P=0&h=180"
          alt="profile"
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
        <section className="px-3">
          <h5 style={{ margin: "0", fontSize: "15px" }}>Evano</h5>
          <p style={{ margin: "0", fontSize: "10px" }}>Project Manager</p>
        </section>

        <AiOutlineDown style={{fontSize:"10px", float:"right"}}/>
      </div>
    </div>
    <div className="menu-dropdown">
    <Dropdown >
      <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="text-white">
        <span>< RiHexagonLine /></span>{" "}Dashboard
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-3"style={{backgroundColor:"black"}} >
        {menuItems.map((item, index) => (
          <Dropdown.Item key={index} href={`/`} className="text-white px-3 py-2 dropdownItem" 
          style={{ fontSize: "12px" }}>
            {item.icon} {item.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    <div
        className="lower p-3 my-2 d-flex align-items-center mx-2"
        style={{ backgroundColor: "#8c96af", borderRadius:"10px" }}
      >
        <img
          src="https://tse1.explicit.bing.net/th?id=OIP.6JsUxhor4-ZVDTbr-xFvvgHaHa&pid=Api&P=0&h=180"
          alt="profile"
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
        <section className="px-3 text-white">
          <h5 style={{ margin: "0", fontSize: "15px" }}>Evano</h5>
          <p style={{ margin: "0", fontSize: "10px" }}>Project Manager</p>
        </section>

        <AiOutlineDown className="text-white"style={{fontSize:"10px", float:"right"}}/>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
