import React from 'react'
import './live-auction.css'
import {Link} from 'react-router-dom'
import NftCard from '../NftCard/NftCard'
import {NFT__DATA} from '../../../assets/data'


const LiveAuction = () => {
    return (
        <section className='live_auction'>
            <div className="live_auction_top">
                <h3>Live Auction</h3>
                <h5><Link to='/market'>Explore more</Link></h5>
            </div>
            <div className='cards'>
                {
                    NFT__DATA.slice(0,4).map((item) => (
                        <NftCard key={item.id} item={item}/>
                    ))
                } 
            </div>
        </section>
    )
}

export default LiveAuction