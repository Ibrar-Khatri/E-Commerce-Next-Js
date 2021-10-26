import Image from "next/image";
import { MdOutlineCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
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
		<div className='headerMainDiv'>
			<div className='insideMainDiv'>
				<div className='headerLeftContent'>
					<div className='logoStyle'>
						<Image src={logo} alt="Logo" height={28} />
					</div>
					<div className='iconsAndText'>
						<MdOutlineCall size={20} />
						<span>+88012 3456 7894</span>
					</div>
					<div className='iconsAndText'>
						<HiOutlineMail size={20} />
						<span>support@ui-lib.com</span>
					</div>
				</div>
				<div className='headerRightContent'>
					<div className='textStyle'>
						<a href="#">Theme FAQ"s</a>
						<a href="#">Need Help?</a>
					</div>
					<div className='dropDownStyle'>
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
