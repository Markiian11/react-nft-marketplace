import React from 'react'
import './modal.css'
import {RiCloseCircleFill} from 'react-icons/ri'

const Modal = ({setShowModal}) => {
    return (
        <div className="modal_wrapper">
            <div className="single_modal">
                <span className="close_modal" onClick={() => setShowModal(false)}><RiCloseCircleFill/></span>
                <h6>Place a bid</h6>
                <p>You must bid at least <span className="money">5.89 ETH</span></p>

                <div className="input_item">
                    <input type="number" placeholder='00 : 00 ETH'/>
                </div>

                <div className="input_item">
                    <h6>Enter Quantity, 7 availlable</h6>
                    <input type="number" placeholder='Enter Quantity'/>
                </div>
                <div className="price">
                    <p>You must bid at least</p>
                    <span className="money">5.89 ETH</span>
                </div>
                <div className="price">
                    <p>Service Fee</p>
                    <span className="money">0.89 ETH</span>
                </div>
                <div className="price">
                    <p>Total Bid Amount</p>
                    <span className="money">5.89 ETH</span>
                </div>
                <button className="place_btn">
                    Place a Bid
                </button>
            </div>
        </div>
    )
}

export default Modal