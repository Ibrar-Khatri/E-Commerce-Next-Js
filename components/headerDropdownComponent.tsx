import React, { useState, FunctionComponent } from "react";
import { AiOutlineDown } from "react-icons/ai";

type Props = {
	list: string[];
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<any>>;
	isSelected: boolean;
	setIsSelected: React.Dispatch<React.SetStateAction<any>>;
};

const HeaderDropdownComponent: FunctionComponent<Props> = ({
	list,
	selected,
	isSelected,
	setIsSelected,
}) => {
	return (
		<div className='headerDropdown'>
			<span
				onClick={() =>
					isSelected ? setIsSelected(false) : setIsSelected(true)
				}
			>
				{selected} <AiOutlineDown />
			</span>
			<div className='listItem'>
				{isSelected &&
					list.map((item) => <p onClick={() => console.log(item)}>{item}</p>)}
			</div>
		</div>
	);
};

export default HeaderDropdownComponent;
