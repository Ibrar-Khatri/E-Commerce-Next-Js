import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import style from "../styles/flashDealComponent.module.scss";
import { IoIosFlash } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "./itemCard";
import { flashDealItems } from "../helper/flashDeal.helper";
import CarouselArrows from "./carouselArrows";

const FlashDeal: FunctionComponent = () => {
	var settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		className: style.flashDealCarousel,
		nextArrow: <CarouselArrows type='next' />,
		prevArrow: <CarouselArrows type='prev' />,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					className: style.flashDealCarousel,
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
					className: style.flashDealCarousel,
				},
			},
			{
				breakpoint: 499,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					className: style.flashDealCarousel,
				},
			},
		],
	};

	return (
		<div className={style.mainDivFlashDeal}>
			<Caontainer>
				<div>
					<div className={style.flashDealTitle}>
						<IoIosFlash color="red" className={style.flashDealIcon} size={30} />
						<h2>Flash Deals</h2>
					</div>
					<div className={style.itemsView}>
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
