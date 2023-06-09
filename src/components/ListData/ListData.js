import React from "react";
import { Icon } from "@iconify/react";
import "./ListData.css";

/* 

*/

const ListData = ({ datas }) => {
    return (
        <ul className="listuser-container">
            {datas?.map((data) => (
                <li key={data.id}>
                    <a href="/">
                        {data.image && (
                            <img
                                src={data.image || ""}
                                alt=""
                                className="listuser-img"
                            />
                        )}
                        {data.icon ?? data.icon}
                        {data.span ?? data.span}
                        <p className="listuser-text">{data.text}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ListData;
