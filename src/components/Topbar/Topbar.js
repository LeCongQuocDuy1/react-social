import React from "react";
import "./Topbar.css";
import { icons } from "../../ultils/Icons";
import { Icon } from "@iconify/react";

const Topbar = () => {
    return (
        <div className="topbar-container container">
            <div className="topbar-left">
                <img src="/assets/logo.png" alt="" className="logo" />
                <div className="search-bar">
                    <icons.Search className="search-bar-icon" />
                    <input type="text" placeholder="Tìm kiếm trên Facebook" />
                </div>
            </div>
            <div className="topbar-center">
                <ul className="topbar-center-lists">
                    <li>
                        <a href="/" className="active">
                            <Icon
                                className="topbar-center-icon"
                                icon="ic:round-home"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <Icon
                                className="topbar-center-icon"
                                icon="fluent:people-20-regular"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <Icon
                                className="topbar-center-icon"
                                icon="ph:video-light"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <Icon
                                className="topbar-center-icon"
                                icon="ic:round-groups"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <Icon
                                className="topbar-center-icon"
                                icon="fluent:games-20-regular"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="topbar-right">
                <ul className="topbar-right-lists">
                    <li>
                        <Icon
                            icon="mingcute:dot-grid-fill"
                            className="top-right-icon"
                        />
                    </li>
                    <li>
                        <Icon
                            icon="mdi:facebook-messenger"
                            className="top-right-icon"
                        />
                    </li>
                    <li>
                        <Icon
                            icon="tabler:bell-filled"
                            className="top-right-icon"
                        />
                    </li>
                    <div className="avatar">
                        <img src="/assets/avatar.jpg" alt="" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Topbar;
