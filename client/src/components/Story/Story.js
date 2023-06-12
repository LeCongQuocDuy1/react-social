import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "./Story.css";

const Story = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return (
        <div className="story-container">
            <div className="story-head">
                <div className="story-head-item">
                    <Icon icon="ion:book" className="story-icon" />
                    <p>Tin</p>
                </div>
                <div className="story-head-item">
                    <Icon icon="bxs:movie-play" className="story-icon" />
                    <p>Reels</p>
                </div>
                <div className="story-head-item">
                    <Icon icon="bxs:video-plus" className="story-icon" />
                    <p>Phòng họp mặt</p>
                </div>
            </div>
            <div className="story-body">
                <Slider {...settings}>
                    <div className="story-content">
                        <img
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/352338821_665659875384401_6378221445281519770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=h0ILOdNJTRMAX8K_fLb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBHZcM41905OQw0OzzbcYFizjV1j6XBx9O0MLZ4PXtxXw&oe=6487E7EA"
                            alt=""
                            className="story-avatar"
                        />
                        <div className="story-item"></div>
                        <p className="story-name">Suni Hạ Linh</p>
                        <div className="story-overplay"></div>
                    </div>
                    <div className="story-content">
                        <img
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/352338821_665659875384401_6378221445281519770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=h0ILOdNJTRMAX8K_fLb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBHZcM41905OQw0OzzbcYFizjV1j6XBx9O0MLZ4PXtxXw&oe=6487E7EA"
                            alt=""
                            className="story-avatar"
                        />
                        <div className="story-item"></div>
                        <p className="story-name">Suni Hạ Linh</p>
                        <div className="story-overplay"></div>
                    </div>
                    <div className="story-content">
                        <img
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/352338821_665659875384401_6378221445281519770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=h0ILOdNJTRMAX8K_fLb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBHZcM41905OQw0OzzbcYFizjV1j6XBx9O0MLZ4PXtxXw&oe=6487E7EA"
                            alt=""
                            className="story-avatar"
                        />
                        <div className="story-item"></div>
                        <p className="story-name">Suni Hạ Linh</p>
                        <div className="story-overplay"></div>
                    </div>
                    <div className="story-content">
                        <img
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/352338821_665659875384401_6378221445281519770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=h0ILOdNJTRMAX8K_fLb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBHZcM41905OQw0OzzbcYFizjV1j6XBx9O0MLZ4PXtxXw&oe=6487E7EA"
                            alt=""
                            className="story-avatar"
                        />
                        <div className="story-item"></div>
                        <p className="story-name">Suni Hạ Linh</p>
                        <div className="story-overplay"></div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Story;
