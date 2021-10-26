import React, { FunctionComponent } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

type Prop = {
    type: string
    onClick: Function
    className: string
}

const CarouselArrows: FunctionComponent<Prop> = ({ type, onClick, className }) => {
    return (
        <div className="arrowsMAinDiv">
            <div onClick={onClick} className={className}>
                <div className="arrowDiv">{type === 'prev' ? <BsFillArrowLeftCircleFill /> : <BsFillArrowRightCircleFill />}</div>
            </div>
        </div>
    );
};


export default CarouselArrows;
