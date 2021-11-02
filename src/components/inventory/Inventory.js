import React, { useState, useEffect } from "react";
import Search from "../search/search";
import Maincategory from "../mainCategory/mainCategory.js";
import Header from "../header/Header.js";
import jsonData from "../../data/inventory.json";
import "./inventory.css";

const Inventory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inventory")) || jsonData;
    setData(data);
  }, []);

  const onSave = (categoryName, subCategoryName, stocks, skuId) => {
    const newData = data.categories.map((category) => {
      if (category.name === categoryName) {
        const subCategoryValue = category.subCategories.map((subCategory) => {
          if (subCategoryName === subCategory.name) {
            const infoValue = subCategory.info.map((item) => {
              if (item.skuId === skuId) {
                return { ...item, stocks };
              } else return item;
            });
            return { ...subCategory, info: infoValue };
          } else return subCategory;
        });
        return { ...category, subCategories: subCategoryValue };
      } else return category;
    });
    const modified = { categories: newData };
    setData(modified);
    localStorage.setItem("inventory", JSON.stringify(modified));
  };
  const onSearch = (searchTerm) => {
    const dataValue = JSON.parse(localStorage.getItem("inventory"));
    const newData = dataValue.categories.map((category) => {
      const subCategories = category.subCategories.map((subCategory) => {
        const info = subCategory.info.filter(
          ({ name, color, skuId, options, stocks }) => {
            return (
              name.includes(searchTerm) ||
              color.includes(searchTerm) ||
              options.includes(searchTerm) ||
              skuId.includes(searchTerm) ||
              stocks.toString().includes(searchTerm)
            );
          }
        );
        return { ...subCategory, info };
      });
      return { ...category, subCategories };
    });
    const modified = { categories: newData };
    setData(modified);
  };

  const saveIsAvailableOfSubcategory = (subcategoryName, isAvailable) => {
    const newData = data.categories.map((category) => {
      const subCategoryValue = category.subCategories.map((subCategory) => {
        if (subcategoryName === subCategory.name) {
          return { ...subCategory, isAvailable };
        } else return subCategory;
      });
      return { ...category, subCategories: subCategoryValue };
    });
    const modified = { categories: newData };
    setData(modified);
    localStorage.setItem("inventory", JSON.stringify(modified));
  };

  const saveIsAvailableOfCategory = (categoryName, isAvailable) => {
    const newData = data.categories.map((category) => {
      if (category.name === categoryName) {
        return { ...category, isAvailable };
      } else return category;
    });
    const modified = { categories: newData };
    setData(modified);
    localStorage.setItem("inventory", JSON.stringify(modified));
  };
  return (
    <div className="inventory-wrapper">
      <Search onSearch={onSearch} />
      <div className="main-wrapper">
        <Header />
        <Maincategory
          categories={data.categories}
          setData={onSave}
          saveIsAvailableOfCategory={saveIsAvailableOfCategory}
          saveIsAvailableOfSubcategory={saveIsAvailableOfSubcategory}
        />
      </div>
    </div>
  );
};

export default Inventory;
