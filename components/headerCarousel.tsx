import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import style from "../styles/headerCarousel.module.scss";
import NikeShoe from "../assets/nike-black.png";

const HeaderCarousel: FunctionComponent = () => {
	return (
		<div className={style.headerCarouselMainDiv}>
			<Caontainer>
				<div className={style.headerCarousel}>
					<div className={style.headerCarouselText}>
						<div className={style.mainHeading}>
							<h1>50% Off For Your First Shopping</h1>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								lobortis consequat eu, quam etiam at quis ut convalliss.
							</p>
						</div>
						<div>
							<button>Shop Now</button>
						</div>
					</div>
					<div className={style.headerCarouselImage}>
						<Image src={NikeShoe} />
					</div>
				</div>
			</Caontainer>
		</div>
	);
};

export default HeaderCarousel;
