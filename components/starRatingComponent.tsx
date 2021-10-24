import React, { FunctionComponent } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import style from "../styles/starRatingComponent.module.scss";

type Props = {
	value: number;
	activeStar: number;
	onChange: string;
};

const StarRating: FunctionComponent<Props> = ({
	value,
	activeStar,
	// onChange,
}) => {
	// short trick
	const stars = Array.from({ length: 5 }).fill();
	// <IoMdStarOutline size={size - 15} />

	// Internal handle change function
	const handleChange = (value) => {
		// onChange(value + 1);
	};
	console.log(activeStar);
	return (
		<div>
			{stars.map((s, index) => {
				return (
					<span key={index} onClick={() => handleChange(index)}>
						<IoMdStar className={style.activeStar} />
						<IoMdStarOutline className={style.inactiveStar} />
					</span>
				);
			})}
		</div>
	);
};
export default StarRating;
