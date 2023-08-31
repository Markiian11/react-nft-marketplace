import React from 'react'
import './step-section.css'
import {BiWallet} from 'react-icons/bi'
import {RiLayoutMasonryLine} from 'react-icons/ri'
import {GoImage} from 'react-icons/go'
import {AiOutlineOrderedList} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const STEP__DATA = [
    {
        title:'Setup your wallet',
        desc:'Lorem ipsum dolor, sit amet comsectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
        icon: <BiWallet/>
    },
    {
        title:'Create your collection',
        desc:'Lorem ipsum dolor, sit amet comsectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
        icon: <RiLayoutMasonryLine/>
    },
    {
        title:'Add your NFTs',
        desc:'Lorem ipsum dolor, sit amet comsectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
        icon: <GoImage/>
    },
    {
        title:'List them for sale',
        desc:'Lorem ipsum dolor, sit amet comsectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
        icon: <AiOutlineOrderedList/>
    },
]

const StepSection = () => {
    return (
        <section className='step'>
            <div>
                <h3 className="step_title">Create and sell your NFTs</h3>
            </div>
            <div className="step_cards">
            {
                STEP__DATA.map((item,index) => 
                <div className="single_step" key="index">
                        <span>{item.icon}</span>
                    <div className="step_item">
                        <h5><Link to='/wallet'>{item.title}</Link></h5>
                        <p>{item.desc}</p>
                    </div>
                </div>
                )
            }
            </div>
        </section>   
    )
}

export default StepSection