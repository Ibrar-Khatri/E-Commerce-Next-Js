import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import style from "../styles/flashDealComponent.module.scss";
import NikeShoe from "../assets/nike-black.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "./itemCard";

const NextPrev: FunctionComponent = ({ cond, onClick, className }) => {
	console.log(cond);
	return (
		<div className={className} onClick={onClick}>
			{cond}
		</div>
	);
};

const FlashDeal: FunctionComponent = () => {
	var settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		className: style.flashDealCarousel,
		nextArrow: <NextPrev cond="p" />,
		prevArrow: <NextPrev cond="q" />,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
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
				},
			},
			{
				breakpoint: 499,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
		],
	};

	let products: object[] = [
		{
			deal: "25%",
			name: "Smart watch black",
			rating: 3,
			salePrice: "$187.50",
			price: "250.00",
		},
		{
			deal: "25%",
			name: "Smart watch black",
			rating: 3,
			salePrice: "$187.50",
			price: "250.00",
		},
		{
			deal: "25%",
			name: "Smart watch black",
			rating: 3,
			salePrice: "$187.50",
			price: "250.00",
		},
		{
			deal: "25%",
			name: "Smart watch black",
			rating: 3,
			salePrice: "$187.50",
			price: "250.00",
		},
		{
			deal: "25%",
			name: "Smart watch black",
			rating: 3,
			salePrice: "$187.50",
			price: "250.00",
		},
		{
			deal: "25%",
			name: "Smart watch black",
			rating: 3,
			salePrice: "$187.50",
			price: "250.00",
		},
	];

	return (
		<div className={style.mainDivFlashDeal}>
			<Caontainer>
				<div>
					<Slider {...settings}>
						{products.map((item, i) => {
							return <ItemCard index={i + 1} />;
						})}
					</Slider>
				</div>
			</Caontainer>
		</div>
	);
};

export default FlashDeal;
