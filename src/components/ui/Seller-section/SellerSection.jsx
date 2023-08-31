import React from 'react'
import './seller.css'
import {SELLER__DATA} from '../../../assets/data'

const SellerSection = () => {
    return (
        <section className='seller'>
            <div className="seller_section-title">
                <h3>Top Seller</h3>
            </div>

            <div className="sellers">
            {
                SELLER__DATA.map((item) => (
                    <div className="single_seller-card" key={item.id}>
                        <div className="seller_img">
                            <img src={item.sellerImg} alt="Seller"/>
                        </div>

                        <div className="seller_content">
                            <h6>{item.sellerName}</h6>
                            <h6>{item.currentBid}</h6>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default SellerSection