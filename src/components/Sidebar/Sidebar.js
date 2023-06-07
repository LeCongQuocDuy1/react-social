import React from "react";
import ListUser from "../ListUser/ListUser";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-head">
                <ListUser />
            </div>
            <div className="sidebar-bottom">
                <p className="sidebar-bottom-title">Lối tắt của bạn</p>
                <ListUser />
            </div>
        </div>
    );
};

export default Sidebar;
