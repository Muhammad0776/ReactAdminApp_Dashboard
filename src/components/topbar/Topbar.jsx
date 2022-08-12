import React from "react";
import "./topbar.css";
import Logo from "../../images/Logo.png";
import Avatar from "../../images/Avatar.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

export default function Topbar() {
  return (
    <div className="topbar border-bottom py-1">
      <div className="topbarWrapper">
        <div className="topLeft d-flex">
          <span className="logo me-5 d-flex align-items-center">
            <img src={Logo} alt="notphoto" />
          </span>
          <div className="d-flex justify-content-center align-items-center">
            <div className="searchIcon border-end-0 rounded-start">
              <SearchIcon className="text-muted" />
            </div>
            <div>
            <input
              type="text"
              className="form-control searchInput"
              placeholder="Search..."
            />
            </div>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            {/* <span className="topIconBadge">0</span> */}
          </div>
          <img src={Avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
