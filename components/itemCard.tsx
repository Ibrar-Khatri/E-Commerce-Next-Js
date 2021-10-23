import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import style from "../styles/itemCard.module.scss";

const ItemCard: FunctionComponent = (props) => {
	return (
		<div className={style.productCardMainDiv} {...props}>
			<div>{props.index}</div>
		</div>
	);
};

export default ItemCard;
