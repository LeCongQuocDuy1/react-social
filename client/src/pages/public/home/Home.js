import React from "react";
import "./Home.css";
import { Topbar, Sidebar, Feed, Rightbar } from "../../../components";

const Home = () => {
    return (
        <React.Fragment>
            <Topbar />
            <div className="home-container">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </React.Fragment>
    );
};

export default Home;
