import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import {useParams} from 'react-router-dom'
import { NFT__DATA } from '../assets/data'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import {BiShoppingBag} from 'react-icons/bi'
import '../styles/nft-details.css'
import { Link } from 'react-router-dom'

const NftDetails = () => {
    const {id} = useParams()
    const singleNft = NFT__DATA.find(item => item.id === id)
    return (
        <>
            <CommonSection title={singleNft.title}/>
            <section className="single_nft">
                <div>
                    <img src={singleNft.imgUrl} alt="" className='single_nft-img'/>
                </div>
                <div className='single_title'>
                    <h2>{singleNft.title}</h2>
                    <div className="nft_creator">
                        <div className="creator_img">
                            <img src={singleNft.creatorImg} alt="" />
                        </div>
                        <div className="creator_detail">
                            <p>Created By</p>
                            <h6>{singleNft.creator}</h6>
                        </div>
                    </div>
                    <p className='desc'>{singleNft.desc}</p>
                    <button className='place_bid-btn'><BiShoppingBag/><Link to='/wallet'>Place a Bid</Link></button>
                </div>
            </section>
            <LiveAuction/>
        </>
    )
}

export default NftDetails