import React, { FC } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

type Prop = {
    title: string
    color: string
    Icon: any
    size: number
}

const CardHeader: FC<Prop> = ({ title, Icon, color, size }) => {
    return <div className="cardHeaderMainDiv">
        <div>
            <Icon color={color} size={size} />
            <h2>{title}</h2>
        </div>

        <div  >
            <a href="#">
                View all<AiFillCaretRight size={15} />
            </a>
        </div>
    </div>
}
export default CardHeader