import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import NftCard from '../components/ui/NftCard/NftCard'
import img from '../assets/images/img-01.jpg'
import avatar from '../assets/images/ava-01.png'
import '../styles/create.css'

const item = {
    id: "04",
    title: "Guard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Trista Francis",
    creatorImg: avatar,
    currentBid: 7.89,
}

const Create = () => {
    return (
        <>
            <CommonSection title="Create Item"/>

            <section className='create'>
                <div>
                    <h5 className='preview'>Preview Item</h5>
                    <NftCard item={item}/>
                </div>
                <div>
                    <form>
                        <div className="form_input">
                            <label>Upload File</label>
                            <input type="file" placeholder='Browse'/>
                        </div>
                        <div className="form_input">
                            <label>Price</label>
                            <input type="number" placeholder='Enter price for one item (ETH)'/>
                        </div>
                        <div className="form_input">
                            <label>Minimum Bid</label>
                            <input type="number" placeholder='Enter minimum bid'/>
                        </div>

                        <div className='starting'>
                            <div className="form_input">
                                <label>Starting Date</label>
                                <input type="date"/>
                            </div>
                            <div className="form_input">
                                <label>Exporation Date</label>
                                <input type="date"/>
                            </div>
                        </div>

                        <div className="form_input">
                            <label>Title</label>
                            <input type="text" placeholder='Enter title'/>
                        </div>

                        <div className="form_input">
                            <label>Description</label>
                            <textarea className='textarea' rows="10" placeholder='Enter description'></textarea>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Create