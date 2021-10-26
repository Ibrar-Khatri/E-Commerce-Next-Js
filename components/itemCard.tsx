import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import StarRating from "./starRatingComponent";
import { AiOutlineMinus, AiOutlinePlus, AiFillEye, AiOutlineHeart } from 'react-icons/ai'

type Props = {
	product: object;
};

const ItemCard: FunctionComponent<Props> = ({ product }) => {
	let [quantity, setQuantity] = useState(0)

	return (
		<div className='productCardMainDiv'>
			<div>
				<div className='productImage'>
					<div>
						<div >
							<div className='discountTag'>{`${product.discountPerc}% off`}</div>
							<div className='addToFav'>
								<AiFillEye size={25} />
								<AiOutlineHeart size={25} />
							</div>
						</div>
					</div>
					<Image src={product.productImage} />
				</div>
				<div className='productDetail'>
					<div className='productDet'>
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
					<div className='addToCardBut'>

						{
							quantity > 0 && <>
								<div onClick={() => quantity > 0 && setQuantity(quantity - 1)}><AiOutlineMinus /></div>
								<div>{quantity}</div>
							</>
						}
						<div onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus /></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
