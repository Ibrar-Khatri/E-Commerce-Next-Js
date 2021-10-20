import style from "../styles/header.module.scss";
import Image from "next/image";
import { MdOutlineCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { useState } from "react";
import HeaderDropdownComponent from "./headerDropdownComponent";

const Header = () => {
	let languages: string[] = ["EN", "BN", "HN"];
	let pricesTag: string[] = ["USD", "EUR", "BDT", "INR"];
	let [lan, setLang] = useState("EN");
	let [price, setPrice] = useState("USD");
	let [isSelected, setIsSelected] = useState(false);

	return (
		<div className={style.mainDiv}>
			<div className={style.insideMainDiv}>
				<div className={style.headerLeftContent}>
					<div className={style.logoStyle}>
						<Image src={logo} alt="Logo" height={28} />
					</div>
					<div className={style.iconsAndText}>
						<MdOutlineCall size={20} />
						<span>+88012 3456 7894</span>
					</div>
					<div className={style.iconsAndText}>
						<HiOutlineMail size={20} />
						<span>support@ui-lib.com</span>
					</div>
				</div>
				<div className={style.headerRightContent}>
					<div className={style.textStyle}>
						<a href="#">Theme FAQ"s</a>
						<a href="#">Need Help?</a>
					</div>
					<div className={style.dropDownStyle}>
						<HeaderDropdownComponent
							list={languages}
							selected={lan}
							setSelected={setLang}
							isSelected={isSelected}
							setIsSelected={setIsSelected}
						/>
						<HeaderDropdownComponent
							list={pricesTag}
							selected={price}
							setSelected={setPrice}
							isSelected={isSelected}
							setIsSelected={setIsSelected}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
