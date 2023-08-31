import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import {SiBitcoinsv} from 'react-icons/si'
import {BsCoin} from 'react-icons/bs'
import {TbCoinMonero} from 'react-icons/tb'
import {FaEthereum} from 'react-icons/fa'

import '../styles/wallet.css'

const WALLET__DATA = [
    {
        title:"Bitcoin",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam nisi, quam obcaecati a provident voluptas sequi unde officiis placeat!",
        icon: <SiBitcoinsv/>
    },
    {
        title:"Coinbase",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam nisi, quam obcaecati a provident voluptas sequi unde officiis placeat!",
        icon: <BsCoin/>
    },
    {
        title:"Metamask",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam nisi, quam obcaecati a provident voluptas sequi unde officiis placeat!",
        icon: <TbCoinMonero/>
    },
    {
        title:"Ethereum",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam nisi, quam obcaecati a provident voluptas sequi unde officiis placeat!",
        icon: <FaEthereum/>
    }
]

const Wallet = () => {
    return (
        <>
            <CommonSection title="Connect Wallet"/>
            <section className="wallet">
                <div>
                    <h2>Connect your wallet</h2>
                    <p className='wallet_text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam nisi, quam<br/>obcaecati a provident voluptas sequi unde officiis placeat!</p>
                </div>
                <div className='wallets'>
                {
                    WALLET__DATA.map((item,index) => (
                            <div key={index} className="wallet_item">
                                <span>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <p className='desc'>{item.desc}</p>
                            </div>
                    ))
                }
                </div>
            </section>
        </>
    )
}

export default Wallet