import React from 'react'
import './common.css'

const CommonSection = ({title}) => {
    return (
        <section className="common">
            <div><h2>{title}</h2></div>
        </section>
    )
}

export default CommonSection