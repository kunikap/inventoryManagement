import React, { useState } from "react";
import "./subcategoryData.css";

const Subcategory = ({ name, color, options, skuId, stocks, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [stockValue, setStockValue] = useState(stocks);
  const [errorMessage, setErrorMessage] = useState("");

  if (stocks === "Unlimited" && !isUnlimited)  {
    setIsUnlimited(true);
    setStockValue("");
  }
  
  const handleStockInput = (event) => {
    const value = event.target.value;
    if (checkForNumber(value)) {
      setStockValue(value);
      setErrorMessage("");
    }
    if (value === "" && !isUnlimited) {
      setErrorMessage("Please enter stock value");
    }
    if (value === "" && isUnlimited) {
      setStockValue("");
      setErrorMessage("");
    }
  };

  const checkForNumber = (value) => {
    const numberRegex = /^[0-9\b]+$/;
    return value === "" || numberRegex.test(value);
  };

  const handleUnlimitedChange = (event) => {
    const value = event.target.checked;
    setIsUnlimited(value);
    if (value) {
      setErrorMessage("");
    }
  };

  const saveModifications = () => {
    const value = isUnlimited && stockValue === "" ? "Unlimited": stockValue;
    onSave(value, skuId);
    setEditMode(!editMode);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{color}</td>
      <td>{options}</td>
      <td>{skuId}</td>
      {
        <td>
          {editMode ? (
            <div>
              <input
              className = "stock-input"
                type="text"
                value={stockValue}
                placeholder="Enter value"
                onChange={handleStockInput}
              />
              
              <input
               className = "unlimited-checkbox"   
                type="checkbox"
                name="stocksValue"
                value={isUnlimited}
                onChange={handleUnlimitedChange}
              />
              <label for="stocksValue">Unlimited</label>
              </div>
            
          ) : (
            stocks
          )}
          {errorMessage && <span>{errorMessage}</span>}
        </td>
      }
      {
        <td>
          {editMode ? (
            <button className="saveBtn" onClick={saveModifications}>
              {" "}
                Save
              <i className = "fa fa-save"></i>
             
            </button>
          ) : (
            <i
              className=" editBtn fa fa-edit"
              onClick={setEditMode.bind(this, !editMode)}
            ></i>
          )}
        </td>
      }
    </tr>
  );
};

export default Subcategory;
