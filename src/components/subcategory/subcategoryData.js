import React, { useState } from "react";
import "./subcategoryData.css";

const Subcategory = ({ name, color, options, skuId, stocks, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [stockValue, setStockValue] = useState(stocks);
  const handleStockInput = (event) => {
    const value = event.target.value;
    setStockValue(value);
  };

  const handleUnlimitedChange = (event) => {
    const value = event.target.value;
    setIsUnlimited(value);
  };

  const saveModifications = ()=> {
    onSave(stockValue, skuId);
    setEditMode(!editMode);
  }
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
                type="number"
                value={stockValue}
                placeholder="Enter value"
                onChange={handleStockInput}
              />
              <input
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
        </td>
      }
      {
        <td>
          {editMode ? (
            <button className="" onClick={saveModifications}>
              {" "}
              <i className="fa fa-save"></i>
            </button>
          ) : (
            <i
              className="fa fa-edit"
              onClick={setEditMode.bind(this, !editMode)}
            ></i>
          )}
        </td>
      }
    </tr>
  );
};

export default Subcategory;
