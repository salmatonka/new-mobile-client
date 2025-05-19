import React from 'react';

import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../Products/ProductsCard';

const FilterByCategorey = () => {
    const mobiles = useLoaderData()

   
    return (
        <div className='max-w-[1240px] mx-auto pt-20'>
           
           <div className='md:grid grid-cols-3 gap-10 py-24 '>
           {
                                   mobiles?.map(mobile => <ProductsCard
                                       key={mobile?._id}
                                       mobile={mobile}
                                   ></ProductsCard>)
                               }
           </div>
        </div>
    );
};

export default FilterByCategorey;