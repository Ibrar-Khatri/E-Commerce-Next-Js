import React, { useState, FunctionComponent } from "react";
import style from "../styles/headerDropdownComponent.module.scss";
import { AiOutlineDown } from "react-icons/ai";

type Props = {
	list: string[];
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<any>>;
};

const HeaderDropdownComponent: FunctionComponent<Props> = ({
	list,
	selected,
}) => {
	let [isSelect, setIsSelect] = useState(false);

	return (
		<div className={style.dropDownItem}>
			<span onClick={() => setIsSelect(true)}>
				{selected} <AiOutlineDown />
			</span>
			<div className={style.listItem}>
				{isSelect &&
					list.map((item) => <p onClick={() => console.log(item)}>{item}</p>)}
			</div>
		</div>
	);
};

export default HeaderDropdownComponent;
