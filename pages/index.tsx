import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FlashDeal from "../components/flashDeal";
import Header from "../components/header";
import HeaderCarousel from "../components/headerCarousel";
import NavBarHeader from "../components/navHeader";
import TopCategory from "../components/topCategories";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<NavBarHeader />
			<HeaderCarousel />
			<div className='indexPageBgColor'>
				<FlashDeal />
				<TopCategory />
			</div>
		</>
	);
};

export default Home;
