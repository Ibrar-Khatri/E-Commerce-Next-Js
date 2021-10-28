import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import StarRating from "./starRatingComponent";
import { AiOutlineMinus, AiOutlinePlus, AiFillEye, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

type Props = {
	product: {
		discountPerc: string
		productImage: string
		rating: number
		price: number
		salePrice: number
		name: string
	};
};

const ItemCard: FunctionComponent<Props> = ({ product }) => {

	let [quantity, setQuantity] = useState(0)
	let [isFavourite, setIsFavourite] = useState(false)

	return (
		<div className='itemCardMainDiv'>
			<div>
				<div className='productImage'>
					<div>
						<div className='discountTag'>{`${product.discountPerc}% off`}</div>
						<div className='addToFav'>
							<div>
								<div className='eyeIcon'>
									<AiFillEye size={20} />
								</div>
								<div className='heartIcon' onClick={() => isFavourite ? setIsFavourite(false) : setIsFavourite(true)}>
									{
										isFavourite ? <AiFillHeart size={20} color='#d23f57' /> : <AiOutlineHeart size={20} color='rgba(0, 0, 0, 0.54)' />
									}
								</div>
							</div>
						</div>
					</div>
					<div>
						<Image src={product.productImage} />
					</div>
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
