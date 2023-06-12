import React from "react";
import "./Feed.css";
import CreatePost from "../CreatePost/CreatePost";
import PostItem from "../PostItem/PostItem";
import Story from "../Story/Story";
import { posts } from "../../ultils/PostDatas";

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-content">
                <div className="feed-item feed-story">
                    <Story />
                </div>
                <div className="feed-item">
                    <CreatePost />
                </div>
                {posts.map((item) => (
                    <div className="feed-item" key={item.id}>
                        <PostItem posts={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
