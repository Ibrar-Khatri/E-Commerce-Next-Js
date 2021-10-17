import { FunctionComponent, useState } from "react";
import Image from "next/image";
import style from "../styles/navHeader.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { TiUserOutline } from "react-icons/ti";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import categoryIcon from "../assets/categories.png";
import bazarLogo from "../assets/logo.svg";
import Caontainer from "./container";

const NavBarHeader: FunctionComponent = () => {
	const allCategory: string[] = [
		"All Categories",
		"Car",
		"Clothes",
		"Electronics",
		"laptop",
		"Desktop",
		"Camera",
		"Toys",
	];
	let [isOpen, setIsOpen] = useState(false);
	let [categoriesOpen, setCategories] = useState(false);
	return (
		<div className={style.navBarMainDiv}>
			<Caontainer>
				<div>
					<div className={style.navBarStyle}>
						<div className={style.bazarLogo}>
							<a href="#">
								<Image src={bazarLogo} />
							</a>
						</div>
						<div className={style.searchBar}>
							<AiOutlineSearch size={21} className={style.searchIcon} />
							<input
								type="text"
								className={style.textField}
								placeholder="Seacrhing for..."
							/>
							<div
								className={style.serachField}
								onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
							>
								<span className={style.categoryTitleText}>
									All Categories <AiOutlineDown />
								</span>
								{isOpen && (
									<div className={style.categoryList}>
										{allCategory.map((cate) => (
											<p>{cate}</p>
										))}
									</div>
								)}
							</div>
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

					<div className={style.navBarCategoryStyle}>
						<div
							className={style.categories}
							onClick={() =>
								categoriesOpen ? setCategories(false) : setCategories(true)
							}
						>
							<div>
								<span className={style.categoryIcon}>
									<Image src={categoryIcon} />
								</span>
								<span>Categories</span>
							</div>
							{categoriesOpen ? <AiOutlineDown /> : <AiOutlineRight />}
						</div>
						<div className={style.pagesLink}>
							<a href="#">Home</a>
							<a href="#">Pages</a>
							<a href="#">User Account</a>
							<a href="#">Vendor Account</a>
							<a href="#">Back to Demos</a>
						</div>
					</div>
				</div>
			</Caontainer>
		</div>
	);
};

export default NavBarHeader;
