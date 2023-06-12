import React from "react";
import "./PostItem.css";
import { Icon } from "@iconify/react";

const PostItem = ({ posts }) => {
    return (
        <div className="post-container">
            <div className="post-head">
                <div className="post-content">
                    <div className="post-content-head">
                        <div className="post-infors">
                            <img src={posts?.avatarUrl} alt="" />
                            <div className="post-infors-gr">
                                <p className="post-title">{posts?.nameUser}</p>
                                <p className="post-description">
                                    <span>{posts?.timeCreated}</span>
                                    <Icon
                                        icon="bx:world"
                                        className="post-description-icon"
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="post-functionally">
                            <Icon
                                icon="tabler:dots"
                                className="post-functionally-icon"
                            />
                            <Icon
                                icon="prime:times"
                                className="post-functionally-icon"
                            />
                        </div>
                    </div>
                    <div className="post-content-text">{posts?.content}</div>
                    <div className="post-content-img">
                        <img src={posts?.imageUrl} alt="" />
                    </div>
                </div>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-head">
                    <div className="post-bottom-reactions">
                        <div className="post-reactions-icons">
                            <img src="./assets/like.png" alt="" />
                            <img src="./assets/heart.png" alt="" />
                        </div>
                        <div className="post-reactions-numbers">
                            <p>{posts?.likeNumber}</p>
                        </div>
                    </div>
                    <div className="post-bottom-options">
                        <div className="post-options">
                            <p>{posts?.commentNumber}</p>
                            <Icon
                                icon="fluent:comment-12-regular"
                                className="post-options-icon"
                            />
                        </div>
                        <div className="post-options">
                            <p>{posts?.shareNumber}</p>
                            <Icon
                                icon="majesticons:share-line"
                                className="post-options-icon"
                            />
                        </div>
                    </div>
                </div>
                <div className="post-bottom-footer">
                    <div className="post-footer-item">
                        <Icon
                            icon="ant-design:like-outlined"
                            className="post-footer-icon"
                        />
                        <p>Thích</p>
                    </div>
                    <div className="post-footer-item">
                        <Icon
                            icon="fluent:comment-12-regular"
                            className="post-footer-icon"
                        />
                        <p>Bình luận</p>
                    </div>
                    <div className="post-footer-item">
                        <Icon
                            icon="majesticons:share-line"
                            className="post-footer-icon"
                        />
                        <p>Chia sẻ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
