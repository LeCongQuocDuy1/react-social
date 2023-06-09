import React from "react";
import "./Feed.css";
import CreatePost from "../CreatePost/CreatePost";
import PostItem from "../PostItem/PostItem";

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-content">
                <div className="feed-item">
                    <CreatePost />
                </div>
                <div className="feed-item">
                    <PostItem />
                </div>
            </div>
        </div>
    );
};

export default Feed;
