import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

type Props = {
    category: {
        name: string
        orderPerWeek: string
        cateImage: string
    };
};

const TopCategoryItemCard: FunctionComponent<Props> = ({ category }) => {

    return (
        <div className='topCategoryItemCardMainDiv'>
            <div>
                <div className='categoryNameAndStatus' >
                    <div>{category.name}</div>
                    <div>{category.orderPerWeek}</div>
                </div>
                <div>
                    <Image src={category.cateImage} className='categoryImage' />
                </div>
            </div>
        </div>
    );
};

export default TopCategoryItemCard;
