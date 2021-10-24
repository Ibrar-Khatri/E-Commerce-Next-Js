import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FlashDeal from "../components/flashDealComponent";
import Header from "../components/header";
import HeaderCarousel from "../components/headerCarousel";
import NavBarHeader from "../components/navHeader";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<NavBarHeader />
			<HeaderCarousel />
			<div className={styles.bgColor}>
				<FlashDeal />
			</div>
		</>
	);
};

export default Home;
