import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
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
		className:'headerCarousel',
	};
	return (
		<div className='headerCarouselMainDiv'>
			<Caontainer>
				<div>
					<Slider {...settings}>
						<div>
							<div className='headerCarouselText'>
								<div>
									<h1>50% Off For Your First Shopping</h1>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quis lobortis consequat eu, quam etiam at quis ut
										convalliss.
									</p>

									<button>Shop Now</button>
								</div>
							</div>
							<div className='headerCarouselImage'>
								<div>
									<Image src={NikeShoe} className='shoeImage' />
								</div>
							</div>
						</div>
						<div>
							<div className='headerCarouselText'>
								<div>
									<h1>50% Off For Your First Shopping</h1>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Quis lobortis consequat eu, quam etiam at quis ut
										convalliss.
									</p>

									<button>Shop Now</button>
								</div>
							</div>
							<div className='headerCarouselImage'>
								<div>
									<Image src={NikeShoe} className='shoeImage' />
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</Caontainer>
		</div>
	);
};

export default HeaderCarousel;
