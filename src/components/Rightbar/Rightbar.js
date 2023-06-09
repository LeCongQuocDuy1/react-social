import React from "react";
import "./Rightbar.css";
import { Icon } from "@iconify/react";
import ListData from "../ListData/ListData";
import { ListDatas } from "../../ultils/ListDatas";

const Rightbar = () => {
    return (
        <div className="rightbar-container">
            <div className="rightbar-item">
                <div className="rightbar-item-head">
                    <p className="title">Trang và trang cá nhân của bạn</p>
                    <Icon icon="pepicons-pencil:dots-x" />
                </div>
                <div className="rightbar-item-content">
                    <ListData datas={ListDatas.lists3} />
                </div>
            </div>
            <div className="rightbar-item">
                <div className="rightbar-item-head">
                    <p className="title">Người liên hệ</p>
                    <div className="right-group-icons">
                        <Icon
                            icon="majesticons:video-plus"
                            className="right-group-icon"
                        />
                        <Icon
                            icon="basil:search-outline"
                            className="right-group-icon"
                        />
                        <Icon
                            icon="pepicons-pencil:dots-x"
                            className="right-group-icon"
                        />
                    </div>
                </div>
                <div className="rightbar-item-content">
                    <ListData datas={ListDatas.lists4} />
                </div>
            </div>
            <div className="rightbar-item">
                <div className="rightbar-item-head">
                    <p className="title">Cuộc trò chuyện nhóm</p>
                </div>
                <div className="rightbar-item-content">
                    <ListData datas={ListDatas.lists4} />
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
