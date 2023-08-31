import React from 'react'
import MainSection from '../components/ui/MainSection'
import LiveAuction from '../components/ui/Live-auction/LiveAuction'
import SellerSection from '../components/ui/Seller-section/SellerSection'
import Trending from '../components/ui/Trending-section/Trending'
import StepSection from '../components/ui/Step-section/StepSection'

const Home = () => {
    return <>
        <MainSection/>
        <LiveAuction/>
        <SellerSection/>
        <Trending/>
        <StepSection/>
    </>
}

export default Home