import { Icon } from "@iconify/react";

const lists1 = [
    {
        id: 1,
        image: "/assets/avatar.jpg",
        text: "Lê Công Quốc Duy",
    },
    {
        id: 2,
        icon: <Icon icon="ic:round-people" className="listuser-icon" />,
        text: "Tìm bạn bè",
    },
    {
        id: 3,
        icon: <Icon icon="fluent:news-24-filled" className="listuser-icon" />,
        text: "Bảng feed (Gần đây nhất)",
    },
    {
        id: 4,
        icon: <Icon icon="ic:round-groups" className="listuser-icon" />,
        text: "Nhóm",
    },
    {
        id: 5,
        icon: <Icon icon="gis:home" className="listuser-icon" />,
        text: "Marketplace",
    },
    {
        id: 6,
        icon: <Icon icon="ph:video-light" className="listuser-icon" />,
        text: "Watch",
    },
    {
        id: 7,
        span: (
            <span className="listuser-span">
                <Icon icon="icon-park:down" className="listuser-span-icon" />
            </span>
        ),
        text: "Xem thêm",
    },
];

const lists2 = [
    {
        id: 1,
        image: "/assets/list-image/img1list2.jpg",
        text: "FoodHub - Thực phẩm sơ chế theo yêu cầu",
    },
    {
        id: 2,
        image: "/assets/list-image/img1list2.jpg",
        text: "Cộng đồng Sinh viên PXU",
    },
    {
        id: 3,
        image: "/assets/list-image/img1list2.jpg",
        text: "SV- Đào tạo - Đại học Phú Xuân",
    },
    {
        id: 4,
        span: (
            <span className="listuser-span">
                <Icon icon="icon-park:down" className="listuser-span-icon" />
            </span>
        ),
        text: "Xem thêm",
    },
    {
        id: 5,
        image: "/assets/list-image/img1list2.jpg",
        text: "SV- Đào tạo - Đại học Phú Xuân",
    },
    {
        id: 6,
        span: (
            <span className="listuser-span">
                <Icon icon="icon-park:down" className="listuser-span-icon" />
            </span>
        ),
        text: "Xem thêm",
    },
];

const lists3 = [
    {
        id: 1,
        image: "/assets/list-image/img1list3.jpg",
        text: "Coolmate - Website thời trang dành cho quý ông",
    },
    {
        id: 2,
        icon: (
            <Icon
                icon="mdi:loudspeaker-outline"
                className="rightbar-head-icon"
            />
        ),
        text: "Quảng cáo",
    },
];

const lists4 = [
    {
        id: 1,
        image: "/assets/avatar.jpg",
        text: "Nam Phan",
    },
    {
        id: 2,
        image: "/assets/avatar.jpg",
        text: "La Thanh Tùng",
    },
    {
        id: 3,
        image: "/assets/avatar.jpg",
        text: "Hà Văn Ri",
    },
    {
        id: 4,
        image: "/assets/avatar.jpg",
        text: "Nguyễn Đức Long",
    },
    {
        id: 5,
        image: "/assets/avatar.jpg",
        text: "Nguyễn Cương",
    },
];

export const ListDatas = {
    lists1,
    lists2,
    lists3,
    lists4,
};
