import React from "react";
import "./subcategory.css";
import SubcategoryData from "./subcategoryData";

const Subcategory = ({ subCategories, setData }) => {
  return (
    <div>
      {subCategories && subCategories.map(({name, info}) => (
        <>
          <div className="sub-category">{name}</div>
          <table className="data-table">
            <tbody>
              {info.map((data => <SubcategoryData {...data} onSave={setData}/>))}
            </tbody>
          </table>
        </>
      ))}
    </div>
  );
};
export default Subcategory;
