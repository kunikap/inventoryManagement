import React, {useState, useEffect} from "react";
import Search from "../search/search";
import Maincategory from "../mainCategory/mainCategory.js";
import Header from "../header/Header.js";
import jsonData from "../../data/inventory.json"
import "./inventory.css";

const Inventory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
  }, [])
  return (
    <div className="inventory-wrapper">
      <Search />
      <div className="main-wrapper">
        <Header />
        <Maincategory categories={data.categories} setData={setData}/>
      </div>
    </div>
  );
};

export default Inventory;
