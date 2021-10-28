import React, { FunctionComponent } from "react";
import Caontainer from "./container";
import { BsGridFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topCategories } from "../helper/topCategory.helper";
import { flashDealItems } from "../helper/flashDeal.helper";
import CardHeader from "./cardHeader";
import ItemCard from "./itemCard";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import TopCategoryItemCard from "./topCategoryItemCard";


const TopCategory: FunctionComponent = () => {

    var settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "topCategoryCarousel",
        nextArrow: <BsFillArrowRightCircleFill />,
        prevArrow: <BsFillArrowLeftCircleFill />,

        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="mainDivTopCategory">
            <Caontainer>
                <div>
                    <CardHeader title='Top Categories' color='#d23f57' Icon={BsGridFill} size={25} />
                    <div >
                        <Slider {...settings}>
                            {topCategories.map((item, i) => {
                                return <TopCategoryItemCard category={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
            </Caontainer>
        </div>
    );
};

export default TopCategory;
