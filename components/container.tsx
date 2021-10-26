import Image from "next/image";
import React from "react";
type Props = {
	children: React.ReactChild;
};

const Caontainer = ({ children }: Props) => {
	return <div className='customConatiner'>{children}</div>;
};
export default Caontainer;
