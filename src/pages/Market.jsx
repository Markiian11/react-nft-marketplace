import React,{useState} from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import NftCard from '../components/ui/NftCard/NftCard'
import '../styles/market.css'
import {NFT__DATA} from '../assets/data'

const Market = () => {
    const [data, setData] = useState(NFT__DATA)

    const handleCategory = (e) =>{
        const filterValue = e.target.value
        if(filterValue === "trending"){
            const filterData = NFT__DATA.filter(item => item.categories === "trending")
            setData(filterData)
        }

        if(filterValue === "rare"){
            const filterData = NFT__DATA.filter(item => item.categories === "rare")
            setData(filterData)
        }

        if(filterValue === "collectible"){
            const filterData = NFT__DATA.filter(item => item.categories === "collectible")
            setData(filterData)
        }
    }

    const handleSort = (e) =>{
        const filterValue = e.target.value
            if(filterValue === "high"){
                const filterData = NFT__DATA.filter(item => item.currentBid >= 6)
                setData(filterData)
            }

            if(filterValue === "mid"){
                const filterData = NFT__DATA.filter(item => item.currentBid >= 5.50 && item.currentBid < 6)
                setData(filterData)
            }

            if(filterValue === "low"){
                const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.50)
                setData(filterData)
            }
    }

    return (
        <>
            <CommonSection title={"MarketPlace"}/>
            <section className="filter">
                <div className="market_product">
                    <div className="filter_left">
                        <div className="all_category">
                            <select onChange={handleCategory}>
                            <option>All Categories</option>
                                <option value="trending">Trending</option>
                                <option value="rare">Rare</option>
                                <option value="collectible">Collectible</option>
                            </select>
                        </div>
                    </div>
                    <div className="all_items">
                        <select onChange={handleSort}>
                            <option>Sort By</option>
                                <option value="high">High Rate</option>
                                <option value="mid">Mid Rate</option>
                                <option value="low">Low Rate</option>
                        </select>
                    </div>
                </div>
                <div className="cards">
                {
                    data?.map((item) =>(
                        <NftCard item={item} key={item.id}/>
                    ))
                }
                </div>
            </section>
        </>
    )
} 

export default Market