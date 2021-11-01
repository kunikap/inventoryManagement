import React from 'react';
import "./Header.css"

const Header = ()=> {
    return (
        <table className="table-wrapper">
          <thead>
            <tr>
              <th>ITEM NAME</th>
              <th>COLOR</th>
              <th>OPTIONS</th>
              <th>SKU ID</th>
              <th>STOCKS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
        </table>
    )
}

export default Header;
