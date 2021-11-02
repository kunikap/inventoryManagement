import React, { useState } from "react";
import "./subcategoryData.css";

const Subcategory = ({ name, color, options, skuId, stocks, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <tr>
      <td>{name}</td>
      <td>{color}</td>
      <td>{options}</td>
      <td>{skuId}</td>
      {<td>{stocks}</td>}
      {
        <td>
          {editMode ? (
            <button className="" onClick={setEditMode.bind(this, !editMode)}>
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
