import React, { useState } from "react";
import "./mainCategory.css";
import Subcategory from "../subcategory/subcategory";
import Switch from "../switch/Switch.js";
const Maincategory = ({ categories, setData, saveIsAvailableOfCategory, saveIsAvailableOfSubcategory }) => {
  const [activeTab, setActiveTab] = useState(null);
  if (activeTab == null && categories) setActiveTab(categories[0].name);

  const handleToggle = (name) => {
    if (activeTab === name) {
      setActiveTab("");
    } else {
      setActiveTab(name);
    }
  };
  const handleIsAvailable = (name, event)=>{
    const value = event.target.checked;
    saveIsAvailableOfCategory(name, value);
  }
  

  const onSave = (...args) => {
    setData(...args);
  };
  return (
    <div className="data-wrapper">
      {categories &&
        categories.map(({ name, subCategories, isAvailable }) => (
          <div className="category-wrapper">
            <div className="main-category-wrapper">
              <div className="main-category">{name}</div>

              <div className="right-component">
                <span>Availability</span>
                <Switch
                  isOn={isAvailable}
                  onColor="#157BF9"
                  handleToggle={handleIsAvailable.bind(this, name)}
                />
                <button
                  className="accordion-button"
                  onClick={handleToggle.bind(this, name)}
                >
                  -
                </button>
              </div>
            </div>
            {subCategories.map(
              (subCategory) =>
                activeTab == name && (
                  <Subcategory
                    {...subCategory}
                    saveIsAvailableOfSubcategory={saveIsAvailableOfSubcategory}
                    setData={(...args) => onSave(name, ...args)}
                  />
                )
            )}
          </div>
        ))}
    </div>
  );
};
export default Maincategory;
