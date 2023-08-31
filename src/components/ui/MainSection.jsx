import React from 'react'
import { Link } from 'react-router-dom'
import {BsRocket} from 'react-icons/bs'
import {GoPencil} from 'react-icons/go'
import './main.css'
import mainImg from '../../assets/images/main.jpg'

const MainSection = () => {
    return (
        <section className="main">
            <div className="main_content">
                <h2>Discover rare digital art and collect<br/><span>sell extraordinary NFTs</span></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi omnis neque<br/>adipisci sequi ullam unde in minus quis quos</p>
                <div className="main_btns">
                    <button><BsRocket/><Link to='/market'>Explore</Link></button>
                    <button><GoPencil/><Link to='/create'>Create</Link></button>
                </div>
            </div>
            <div className="main_img">
                <img src={mainImg} alt="Main"/>
            </div>
        </section>
    )
}

export default MainSection