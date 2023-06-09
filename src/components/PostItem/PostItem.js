import React from "react";
import "./PostItem.css";
import { Icon } from "@iconify/react";

const PostItem = () => {
    return (
        <div className="post-container">
            <div className="post-head">
                <div className="post-content">
                    <div className="post-content-head">
                        <div className="post-infors">
                            <img
                                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/307754299_107320732145353_714539427902763769_n.png?stp=dst-png_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9392qgAJIooAX98PNqQ&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD0ZXjhRU02LR7m_J4APYX-OEcZJj0LE8aJ-YKinNwknw&oe=64870BD8"
                                alt=""
                            />
                            <div className="post-infors-gr">
                                <p className="post-title">Rạp Phim</p>
                                <p className="post-description">
                                    <span>4 ngày ·</span>
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
                    <div className="post-content-text">
                        "Những người dịu dàng nhất tôi từng biết sống trong một
                        thế giới chẳng hề dịu dàng với họ. Những người tuyệt vời
                        nhất tôi từng biết đã trải qua rất nhiều vụn vỡ, và họ
                        vẫn yêu say đắm, vẫn quan tâm đến người khác. Đôi khi,
                        chính những người chịu nhiều thương tổn nhất lại từ chối
                        chai lì với thế giới này, vì họ không bao giờ muốn người
                        khác phải trải qua những gì họ từng trải. Thật khó để
                        không thán phục họ." <br /> - Bianca Sparacino <br />{" "}
                        Phim: American Beauty (1999)
                    </div>
                    <div className="post-content-img">
                        <img
                            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/351782814_215973897961485_7815194690168424972_n.png?stp=dst-png_s640x640&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=wdF_pLIOOU8AX8ikRJr&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD8I9LqytCnUMKjmjEZpNyPKG0pxM8CS_kP5GaDtuiGEQ&oe=64867636"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="post-bottom"></div>
        </div>
    );
};

export default PostItem;
