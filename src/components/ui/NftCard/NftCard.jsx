import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {BiShoppingBag} from 'react-icons/bi'
import Modal from '../Modal/Modal' 

const NftCard = (props) => {
    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="single_nft_card">
            <div className="nft_img">
                <img src={imgUrl} alt="NFT-img" />
            </div>
            <div className="nft_content">
                <h5 className="nft_title"><Link to={`/market/${id}`}>{title}</Link></h5>

                <div className="creator_info-wrap">
                    <div className="creator_img">
                        <img src={creatorImg} alt="Creator" />
                    </div>

                    <div className="creator_info">
                        <div>
                            <h6>Created By</h6>
                            <p>{creator}</p>
                        </div>
                        <div>
                            <h6>Current Bid</h6>
                            <p>{currentBid} ETH</p>
                        </div>
                    </div>
                </div>
                <div className='bid'> 
                    <button className="bid_btn" onClick={() => setShowModal(true)}><BiShoppingBag/>Place Bid</button>
                    {showModal && <Modal setShowModal={setShowModal}/>}
                    <h5 className='history_link'><Link to="#">View History</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default NftCard