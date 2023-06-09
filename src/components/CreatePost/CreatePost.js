import React from "react";
import "./CreatePost.css";
import { Icon } from "@iconify/react";

const CreatePost = () => {
    return (
        <div className="createpost-container">
            <div className="createpost-head">
                <img src="/assets/avatar.jpg" alt="" />
                <input
                    type="text"
                    placeholder="Quốc Duy ơi, bạn đang nghĩ gì thế?"
                />
            </div>
            <div className="createpost-bottom">
                <div className="createpost-bottom-item item-video">
                    <Icon
                        icon="majesticons:video"
                        className="createpost-bottom-icon"
                    />
                    <p>Video trực tiếp</p>
                </div>
                <div className="createpost-bottom-item item-image">
                    <Icon
                        icon="ion:images"
                        className="createpost-bottom-icon"
                    />
                    <p>Ảnh/video</p>
                </div>
                <div className="createpost-bottom-item item-react">
                    <Icon
                        icon="mdi:face-outline"
                        className="createpost-bottom-icon"
                    />
                    <p>Cảm xúc/hoạt động</p>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
