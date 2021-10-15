import Image from "next/image";
import React from "react";
import style from "../styles/container.module.scss";
type Props = {
	children: React.ReactChild;
};

const Caontainer = ({ children }: Props) => {
	return <div className={style.containerStyle}>{children}</div>;
};
export default Caontainer;
