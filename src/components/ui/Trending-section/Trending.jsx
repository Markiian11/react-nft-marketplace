import React from 'react'
import './trending.css'
import { NFT__DATA } from '../../../assets/data'
import NftCard from '../NftCard/NftCard'

const Trending = () => {
    return (
        <section className='trending'>
            <div><h3 className="trending_title">Trending</h3></div>
            <div className="trending-cards">
            {
                NFT__DATA.slice(0,8).map((item) => (
                    <div key={item.id}>
                        <NftCard item={item}/>
                    </div>
                ))
            } 
            </div>
        </section>
    )
}

export default Trending