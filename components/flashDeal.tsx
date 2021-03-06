import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import { IoIosFlash } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "./itemCard";
import { flashDealItems } from "../helper/flashDeal.helper";
import CardHeader from "./cardHeader";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";


const FlashDeal: FunctionComponent = () => {
	var settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		className: "flashDealCarousel",
		nextArrow: <BsFillArrowRightCircleFill />,
		prevArrow: <BsFillArrowLeftCircleFill />,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					className: "flashDealCarousel"
				},
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					className: "flashDealCarousel"
				},
			},
			{
				breakpoint: 499,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					className: "flashDealCarousel"
				},
			},
		],
	};

	return (
		<div className="mainDivFlashDeal">
			<Caontainer>
				<div>
					<CardHeader title='Flash Deal' color='#d23f57' Icon={IoIosFlash} size={25} />
					<div >
						<Slider {...settings}>
							{flashDealItems.map((item, i) => {
								return <ItemCard product={item} />;
							})}
						</Slider>
					</div>
				</div>
			</Caontainer>
		</div>
	);
};

export default FlashDeal;
