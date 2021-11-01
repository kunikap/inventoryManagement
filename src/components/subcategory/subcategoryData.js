import React, { useState } from "react";
import "./subcategoryData.css";

const Subcategory = ({name, color, options, skuId, stocks, onSave}) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <tr>
      <td>{name}</td>
      <td>{color}</td>
      <td>{options}</td>
      <td>{skuId}</td>
      {<td>{stocks}</td>}
      {<td>{}</td>}
    </tr>
  );
};

export default Subcategory;
