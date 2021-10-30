import React, { FunctionComponent } from "react";
import Image from "next/image";
import Caontainer from "./container";
import { GiStarGate } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHeader from "./cardHeader";
import { topRatingItems } from "../helper/topRating.helper";
import StarRating from "./starRatingComponent";



const TopRating: FunctionComponent = () => {

    return (
        <div className='topRatingMainDiv'>
            <Caontainer>
                <div >
                    <CardHeader title='Top Ratings' color='rgb(250, 175, 0)' Icon={GiStarGate} size={25} />
                    <div className="topRating">
                        {
                            topRatingItems.map(item => {
                                let { productImage, rating, itemSold, name, price, } = item
                                return <div className='topRatingItemCardMainDiv'>
                                    <Image src={productImage} className='topRatingProductImage' />
                                    <div>
                                        <div>
                                            <span><StarRating rating={rating} /></span><span>({itemSold})</span>
                                        </div>
                                        <div>{name}</div>
                                        <div>${price}</div>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </Caontainer>
        </div>
    );
};

export default TopRating;
