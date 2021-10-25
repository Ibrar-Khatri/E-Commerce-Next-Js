import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import style from "../styles/itemCard.module.scss";
import StarRating from "./starRatingComponent";
// import { BsDashLg } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type Props = {
	product: object;
};

const ItemCard: FunctionComponent<Props> = ({ product }) => {
	let [quantity, setQuantity] = useState(0)

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
							<StarRating rating={product.rating} />
						</div>
						<div>
							<span>{product.salePrice}</span>
							<del>{product.price}</del>
						</div>
					</div>
					<div className={style.addToCardBut}>

						{
							quantity > 0 && <>
								<div onClick={() => quantity > 0 && setQuantity(quantity - 1)}><AiOutlineMinus  /></div>
								<div>{quantity}</div>
							</>
						}
						<div onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus  /></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
