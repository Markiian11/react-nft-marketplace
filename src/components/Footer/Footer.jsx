import React from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { RiTelegramLine } from 'react-icons/ri'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom' 
import './footer.css'

const MY_ACCOUNT = [
    {
        display: 'Author Profile',
        url: '/seller-profile'
    },
    {
        display: 'Create Item',
        url: '/create'
    },
    {
        display: 'Collection',
        url: '/market'
    },
    {
        display: 'Edit Profile',
        url: '/edit-profile'
    }
]

const RESOURCES = [
    {
        display: 'Help Center',
        url: '#'
    },
    {
        display: 'Partner',
        url: '#'
    },
    {
        display: 'Community',
        url: '#'
    },
    {
        display: 'Activity',
        url: '#'
    }
]

const COMPANY = [
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Career',
        url: '#'
    },
    {
        display: 'Ranking',
        url: '#'
    },
    {
        display: 'Contact Us',
        url: '/contact'
    }
]

const Footer = () => {
    return (
        <footer>
            <div className="footer">
            <div>
                <div className="logo">
                    <h2><AiOutlineFire/>NFTs</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur<br/>adipisicing elit. Voluptate, quod repellat!<br/>Quis quos dolorum tenetur fuga?<br/>Aspernatur rerum quae amet.</p>
                </div>
            </div>
            <div>
                <h5>My Account</h5>
                <div className='list_group'>
                    {
                        MY_ACCOUNT.map((item, index) => (
                            <ul className="list_item" key={index}>
                                <Link to={item.url}>{item.display}</Link>
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div>
                <h5>Resources</h5>
                <div className='list_group'>
                    {
                        RESOURCES.map((item, index) => (
                            <ul className="list_item" key={index}>
                                <Link to={item.url}>{item.display}</Link>
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div>
            <h5>Company</h5>
                <div className='list_group'>
                    {
                        COMPANY.map((item, index) => (
                            <ul className="list_item" key={index}>
                                <Link to={item.url}>{item.display}</Link>
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div>
                <h5>Newsletter</h5>
                <input type="text" className="newsletter" placehplder="Email"/>
                <div className="social_links">
                    <span><Link to='#'><BiLogoFacebook/></Link></span>
                    <span><Link to='#'><BsInstagram/></Link></span>
                    <span><Link to='#'><FiTwitter/></Link></span>
                    <span><Link to='#'><RiTelegramLine/></Link></span>
                    <span><Link to='#'><BsDiscord/></Link></span>
                </div>
            </div>
            </div>
            <p className='copyright'>Copyrights 2023, Developed by Rahman @Muhin's Tech Diary All Rights Reserved</p>
        </footer>
    )
}

export default Footer