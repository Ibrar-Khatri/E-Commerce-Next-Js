import React, { FunctionComponent } from "react";
import Image from "next/image";
import style from "../styles/itemCard.module.scss";
import StarRating from "./starRatingComponent";

type Props = {
	product: object;
};

const ItemCard: FunctionComponent<Props> = ({ product }) => {
	return (
		<div className={style.productCardMainDiv}>
			<div>
				<div className={style.productImage}>
					<Image src={product.productImage} />
				</div>
				<div className={style.productDetail}>
					<div className={style.productDet}>
						<div>
							<a href="#">
								<h3>{product.name}</h3>
							</a>
						</div>
						<div>
							<StarRating value={product.rating} activeStar={2} />
						</div>
						<div>
							<span>{product.salePrice}</span>
							<del>{product.price}</del>
						</div>
					</div>
					<div className={style.addToCardBut}></div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
