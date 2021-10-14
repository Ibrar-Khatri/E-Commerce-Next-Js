import style from "../styles/header.module.scss";
import Image from "next/image";
import { MdOutlineCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
	return (
		<div className={style.mainDiv}>
			<div className={style.headerLeftContent}>
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
				<div className={style.iconsAndText}>
					<span>EN</span>
				</div>
				<div className={style.iconsAndText}>
					<span>USD</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
