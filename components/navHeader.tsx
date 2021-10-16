import { FunctionComponent } from "react";
import Image from "next/image";
import style from "../styles/navHeader.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { TiUserOutline } from "react-icons/ti";
import { RiShoppingBagLine } from "react-icons/ri";
import bazarLogo from "../assets/logo.svg";
import Caontainer from "./container";

const NavBarHeader: FunctionComponent = () => {
	return (
		<div className={style.navBarMainDiv}>
			<Caontainer>
				<div className={style.navBarStyle}>
					<div className={style.bazarLogo}>
						<a href="#">
							<Image src={bazarLogo} />
						</a>
					</div>
					<div className={style.searchBar}>
						<AiOutlineSearch size={20} color="#595a5cbe" />
					</div>
					<div className={style.iconDiv}>
						<div className={style.iconStyle}>
							<TiUserOutline size={25} />
						</div>
						<div className={style.iconStyle}>
							<RiShoppingBagLine size={25} />
						</div>
					</div>
				</div>
			</Caontainer>
		</div>
	);
};

export default NavBarHeader;
