import React, { useEffect, useState } from 'react'
import ProductsCard from '../Products/ProductsCard'

const HomeProducts = () => {
    const [mobiles, setMobiles] = useState([]);
    useEffect(() => {
        fetch('https://repair-mobile-market.onrender.com/usedMobile')
            .then(res => res.json())
            .then(data =>
                // console.log(data)
                setMobiles(data)
            )
    })
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl pt-12 pb-6 font-bold ">Featured Mobiles</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 '>
                {
                    mobiles?.reverse()
                        ?.slice(0, 10)
                        ?.map(mobile => <ProductsCard
                            key={mobile?._id}
                            mobile={mobile}
                        ></ProductsCard>)
                }
            </div>
        </div>
    )
}

export default HomeProducts
