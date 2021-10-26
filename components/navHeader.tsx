import { FunctionComponent, useState } from "react";
import Image from "next/image";
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
		<div className='navBarMainDiv'>
			<Caontainer>
				<div>
					<div className='navBarStyle'>
						<div className='bazarLogo'>
							<a href="#">
								<Image src={bazarLogo} />
							</a>
						</div>
						<div className='searchBar'>
							<AiOutlineSearch size={21} className='searchIcon' />
							<input
								type="text"
								className='textField'
								placeholder="Seacrhing for..."
							/>
							<div
								className='serachField'
								onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
							>
								<span className='categoryTitleText'>
									All Categories <AiOutlineDown />
								</span>
								{isOpen && (
									<div className='categoryList'>
										{allCategory.map((cate) => (
											<p>{cate}</p>
										))}
									</div>
								)}
							</div>
						</div>
						<div className='iconDiv'>
							<div className='iconStyle'>
								<TiUserOutline size={25} />
							</div>
							<div className='iconStyle'>
								<RiShoppingBagLine size={25} />
							</div>
						</div>
					</div>

					<div className='navBarCategoryStyle'>
						<div
							className='categories'
							onClick={() =>
								categoriesOpen ? setCategories(false) : setCategories(true)
							}
						>
							<div>
								<span className='categoryIcon'>
									<Image src={categoryIcon} />
								</span>
								<span>Categories</span>
							</div>
							{categoriesOpen ? <AiOutlineDown /> : <AiOutlineRight />}
						</div>
						<div className='pagesLink'>
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
