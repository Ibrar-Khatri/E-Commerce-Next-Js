import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import style from "../styles/headerCarousel.module.scss";
import NikeShoe from "../assets/nike-black.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderCarousel: FunctionComponent = () => {
	var settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: style.headerCarousel,
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			infinite: true,
		// 			dots: true,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			initialSlide: 1,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 		},
		// 	},
		// ],
	};
	return (
		<div className={style.headerCarouselMainDiv}>
			<Caontainer>
				<Slider {...settings}>
					{/* <div>
						<p>1</p>
					</div>
					<div>2</div> */}
					<div>
						<div className={style.headerCarouselText}>
							<div>
								<h1>50% Off For Your First Shopping</h1>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
									lobortis consequat eu, quam etiam at quis ut convalliss.
								</p>

								<button>Shop Now</button>
							</div>
						</div>
						<div className={style.headerCarouselImage}>
							<div>
								<Image src={NikeShoe} className={style.shoeImage} />
							</div>
						</div>
					</div>
					<div>
						<div className={style.headerCarouselText}>
							<div>
								<h1>50% Off For Your First Shopping</h1>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
									lobortis consequat eu, quam etiam at quis ut convalliss.
								</p>

								<button>Shop Now</button>
							</div>
						</div>
						<div className={style.headerCarouselImage}>
							<div>
								<Image src={NikeShoe} className={style.shoeImage} />
							</div>
						</div>
					</div>
				</Slider>
			</Caontainer>
		</div>
	);
};

export default HeaderCarousel;
