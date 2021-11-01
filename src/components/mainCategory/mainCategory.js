import React from "react";
import "./mainCategory.css";
import Subcategory from "../subcategory/subcategory";

const Maincategory = ({ categories, setData }) => {
  return (
    <div className="data-wrapper">
      {categories && categories.map(({name, subCategories} ) => (
        <>
          <div className="main-category">{name}</div>
          <Subcategory subCategories={subCategories} setData={setData}/>
        </>
      ))}
    </div>
  );
};
export default Maincategory;
