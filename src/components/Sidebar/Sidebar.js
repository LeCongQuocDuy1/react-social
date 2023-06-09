import React from "react";
import "./Sidebar.css";
import ListData from "../ListData/ListData";
import { ListDatas } from "../../ultils/ListDatas";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-head">
                <ListData datas={ListDatas.lists1} />
            </div>
            <div className="sidebar-bottom">
                <div className="sidebar-title">
                    <p className="title">Lối tắt của bạn</p>
                </div>
                <ListData datas={ListDatas.lists2} />
                <div className="sidebar-links">
                    <a href="/">Quyền riêng tư ·</a>
                    <a href="/"> Điều khoản ·</a>
                    <a href="/"> Quảng cáo ·</a>
                    <a href="/"> Lựa chọn quảng cáo ·</a>
                    <a href="/"> Cookie ·</a>
                    <a href="/"> Xem thêm ·</a>
                    <a href="/"> Meta © 2023</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
