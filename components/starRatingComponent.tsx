import React, { FunctionComponent } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

type Props = {
	rating: number;
	activeStar: number;
	onChange: string;
};

const StarRating: FunctionComponent<Props> = ({
	rating,
	activeStar,
	// onChange,
}) => {
	// short trick
	const stars = Array.from({ length: 5 }).fill();
	// <IoMdStarOutline size={size - 15} />

	// Internal handle change function
	const handleChange = (rating) => {
		// onChange(rating + 1);
	};
	console.log(activeStar);
	return (
		<div>
			{stars.map((s, index) => {
				return (
					<span key={index} onClick={() => handleChange(index)}>
						{
							rating > index ? <IoMdStar className='activeStar' /> : <IoMdStarOutline className='inactiveStar' />
						}
					</span>
				);
			})}
		</div>
	);
};
export default StarRating;
