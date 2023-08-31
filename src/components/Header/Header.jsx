import React from 'react'
import './header.css'
import {AiOutlineFire} from 'react-icons/ai'
import {BiWallet} from 'react-icons/bi'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
    {
        display:'Home',
        url:'/home'
    },
    {
        display:'Market',
        url:'/market'
    },
    {
        display:'Create',
        url:'/create'
    },
    {
        display:'Contact',
        url:'/contact'
    }
]

const Header = () => {
    return ( 
        <header className="container header">
            <div className="navigation">
                <div className="logo"> 
                    <h2><AiOutlineFire/> NFTs</h2>
                </div>
            </div>
            <div className="nav_menu">
                <ul className="nav_list">
                    {
                        NAV_LINKS.map((item,index) => (
                            <li className="nav_item" key={index}>
                                <NavLink to={item.url}>{item.display}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="nav_right">
                <button className='btn'><Link to='/wallet'><span><BiWallet/></span>Connect Wallet</Link></button>
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                    <span></span>
                    </label>
                <ul className="menu__box">
                    {
                        NAV_LINKS.map((item,index) => (
                            <li className="menu__item" key={index}>
                                <NavLink to={item.url}>{item.display}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </header>
    )
}

export default Header