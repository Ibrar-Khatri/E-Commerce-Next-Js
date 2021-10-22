import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import style from "../styles/flashDealComponent.module.scss";
import NikeShoe from "../assets/nike-black.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashDeal: FunctionComponent = () => {
	var settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		className: style.flashDealCarousel,
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

	return <div className={style.mainDivFlashDeal}></div>;
};

export default FlashDeal;
