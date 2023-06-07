import React from "react";
import { Icon } from "@iconify/react";
import "./ListUser.css";

const ListUser = () => {
    return (
        <ul className="listuser-container">
            <li>
                <a href="/">
                    <img
                        src="/assets/avatar.jpg"
                        alt=""
                        className="listuser-img"
                    />
                    <p className="listuser-text">Lê Công Quốc Duy</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <Icon icon="ic:round-people" className="listuser-icon" />
                    <p className="listuser-text">Tìm bạn bè</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <Icon
                        icon="fluent:news-24-filled"
                        className="listuser-icon"
                    />
                    <p className="listuser-text">Bảng feed (Gần đây nhất)</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <Icon icon="ic:round-groups" className="listuser-icon" />
                    <p className="listuser-text">Nhóm</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <Icon icon="gis:home" className="listuser-icon" />
                    <p className="listuser-text">Marketplace</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <Icon icon="ph:video-light" className="listuser-icon" />
                    <p className="listuser-text">Watch</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <span className="listuser-span">
                        <Icon
                            icon="icon-park:down"
                            className="listuser-span-icon"
                        />
                    </span>
                    <p className="listuser-text">Xem thêm</p>
                </a>
            </li>
        </ul>
    );
};

export default ListUser;
