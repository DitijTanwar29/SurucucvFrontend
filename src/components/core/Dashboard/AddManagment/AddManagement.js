// AdvertisementManagement.js
import { useState } from "react";
import React from 'react';
import Header from "../MainPage/Header";
import Sidebar from "../MainPage/SideBar";
import AddButton from "../Buttons/AddServicesBut";

 

const AdvertisementManagement = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar
      openSidebarToggle={openSidebarToggle}
      OpenSidebar={OpenSidebar} />

    <div className="section-myProfile">
      <div className="main-myProfile">
        <div><AddButton/></div>
    <div className="advertisement-management">
      <h2>ADVERTISEMENT MANAGEMENT</h2>
      <div className="filter-section">
        <div className="filter-dropdown">
          <label>Show:</label>
          <select>
            <option>ALL</option>
            <option>ON GOING</option>
            <option>PENDING FOR APPROVAL</option>
          </select>
        </div>

        <div className="filter-input">
          <label>Entries</label>
          <input type="text" placeholder="Search here..." />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>ICON</th>
            <th>ADS NAME</th>
            <th>CITY</th>
            <th>COMPANY</th>
            <th>AD CATEGORY</th>
            <th>DEPARTMENT</th>
            <th>WORK METHODS</th>
            <th>ADS SIZE</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>adicon</td>
            <td>hello WELCOME</td>
            <td></td>
            <td>Honda</td>
            <td>Truck/Trailer Driver</td>
            <td>IT DEPARTMENT</td>
            <td>FULL TIME</td>
            <td>Medium</td>
            <td>HELLO</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>adicon</td>
            <td>hello</td>
            <td></td>
            <td>Honda</td>
            <td>--Chose Ad Categories--</td>
            <td>IT DEPARTMENT</td>
            <td>FULL TIME</td>
            <td>Larg</td>
            <td>Welcome</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>adicon</td>
            <td>sa</td>
            <td></td>
            <td>som mon</td>
            <td>--Chose Ad Categories--</td>
            <td>re</td>
            <td>Part Time</td>
            <td>Medium</td>
            <td>aaass</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="pagination-section">
        <span>Showing 1 to 3 of 3 entries</span>
        <button>Previous</button>
        <button>1</button>
        <button>Next</button>
      </div>
    </div>
             
    </div>
        </div>
      </div>
  );
};

export default AdvertisementManagement;
