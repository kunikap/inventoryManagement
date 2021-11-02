import React, { useState } from "react";
import "./mainCategory.css";
import Subcategory from "../subcategory/subcategory";
import Switch from "../switch/Switch.js";
const Maincategory = ({ categories, setData }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);
  if (activeTab == null && categories) setActiveTab(categories[0].name);

  const handleToggle = (name) => {
    if (activeTab === name) {
      setActiveTab("");
    } else {
      setActiveTab(name);
    }
  };

  const handleISsAvailableToggle = (event)=>{
    event.stopPropagation()
    const value = event.target.checked;
    setIsAvailable(value);
  }
  return (
    <div className="data-wrapper">
      {categories &&
        categories.map(({ name, subCategories }) => (
          <div className="category-wrapper">
            <div className="main-category-wrapper">
              <div className="main-category">{name}</div>

              <div className="right-component">
                <span>Availability</span>
                <Switch  isOn={isAvailable} handleToggle={handleISsAvailableToggle} onColor="#157BF9"/>
                <button
                  className="accordion-button"
                  onClick={handleToggle.bind(this, name)}
                >
                  -
                </button>
              </div>
            </div>
            {activeTab == name &&
              subCategories.map((subCategory) => (
                <Subcategory {...subCategory} setData={setData} />
              ))}
          </div>
        ))}
    </div>
  );
};
export default Maincategory;
