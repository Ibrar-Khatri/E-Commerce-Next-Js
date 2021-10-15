import style from "../styles/header.module.scss";
import Image from "next/image";
import { MdOutlineCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";
import Caontainer from "./container";
import logo from "../assets/logo.svg";

const Header = () => {
	let menu1 = ["HN", "BN", "HN"];
	return (
		<div className={style.mainDiv}>
			<Caontainer>
				<div className={style.abc}>
					<div className={style.headerLeftContent}>
						<div>
							<div className={style.logoStyle}>
								<Image src={logo} alt="Logo" height={40} />
							</div>
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
						<div className={style.iconsAndText}>
							<span>Theme FAQ"s</span>
						</div>
						<div className={style.iconsAndText}>
							<span>Need Help?</span>
						</div>
						<div className={style.dropDownStyle}>
							<ul className={style.listItem}>
								<li>EN</li>
								<li>BN</li>
								<li>HN</li>
							</ul>
						</div>
						<div className={style.dropDownStyle}>
							<ul className={style.listItem}>
								<li>USD</li>
								<li>EUR</li>
								<li>BDT</li>
								<li>INR</li>
							</ul>
						</div>
					</div>
				</div>
			</Caontainer>
		</div>
	);
};

export default Header;
