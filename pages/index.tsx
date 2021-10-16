import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import NavBarHeader from "../components/navHeader";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<NavBarHeader />
		</>
	);
};

export default Home;
