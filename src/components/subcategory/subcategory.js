import React, { useState } from "react";
import "./subcategory.css";
import SubcategoryData from "./subcategoryData";
import Switch from "../switch/Switch.js";

const Subcategory = ({ info, name, isAvailable, setData, saveIsAvailableOfSubcategory }) => {
  const [isActive, setIsActive] = useState(true);

  const handleIsAvailable = (name, event)=>{
    const value = event.target.checked;
    saveIsAvailableOfSubcategory(name, value);
  }

  const onSave = (stocks, skuId) => {
    setData(name, stocks, skuId);
  };

  return (
    <div key={name} className="sub-category-outer">
      <div class="sub-category-wrapper">
        <div className="sub-category">{name}</div>
        <div class="subcategory-right-component">
          <span>Availability</span>
          <Switch
            isOn={isAvailable}
            onColor="#157BF9"
            handleToggle={handleIsAvailable.bind(this, name)}
          />
          <button
            className="accordion-button"
            onClick={setIsActive.bind(this, !isActive)}
          >
            -
          </button>
        </div>
      </div>
      <table className="data-table">
        <tbody>
          {isActive &&
            info.map((data) => <SubcategoryData {...data} onSave={onSave} />)}
        </tbody>
      </table>
    </div>
  );
};
export default Subcategory;
