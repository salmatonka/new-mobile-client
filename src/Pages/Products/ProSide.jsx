import React from 'react'

const ProSide = () => {
  return (
    <div>
       <div className="max-w-[1240px] mx-auto ">
                <div className="text-center">
                    <h1 className="text-2xl pt-12 font-bold ">Featured Mobiles</h1>
                    <p>Check & Get Your Desired Product!</p>
                </div>
                <div className='py-10 px-6'>

                    {/* allProducts.length */}




                    {/* <div className='flex justify-center mt-10'>
                    <Link to='/allProducts'>
                        <button style={{ boxShadow: "8px 8px 3px gray", fontSize: "18px" }}
                            className='px-20 fond-semibold bg-secondary text-gray-200 w-full  py-3 rounded-md' >See All</button>
                    </Link>
                </div> */}
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {/* {
                        mobiles?.reverse()
                            ?.slice(0, 6)
                            ?.map(mobile => <ProductsCard
                                key={mobile?._id}
                                mobile={mobile}
                            ></ProductsCard>)
                    } */}

                    {
                        pTitle?.pathname === '/' ?
                            <>
                                {
                                    mobiles?.slice(0, 8)?.map(mobile => <ProductsCard
                                        key={mobile?._id}
                                        mobile={mobile}
                                    />)
                                }
                            </> : <>
                                {
                                    mobiles?.slice(firstPage, lastPage)?.map(mobile => <ProductsCard
                                        key={mobile?._id}
                                        mobile={mobile}
                                    />)
                                }
                            </>
                    }
                </div>

                {/* ....... pagination start ......*/}

                <div className={`${pTitle?.pathname === '/' ? 'hidden' : 'flex justify-center pt-12 pb-10'}`}>
                    <div className="flex gap-1">
                        {
                            pages?.map(({ num }) =>
                                <button
                                    onClick={() => {
                                        setFirstPage(num * 8 - 8)
                                        setLastPage(8 * num)
                                    }}
                                    key={num}
                                    className={`${firstPage / 8 + 1 === num ?
                                        'bg-orange '
                                        :
                                        'border border-yellow-600'} rounded-md border-2 border-orange text-black
                                     py-2 px-4`}
                                >{num}</button>
                            )
                        }
                    </div>
                </div>
                {/* .......pagination end ..... */}

                {
                    pTitle?.pathname === '/' &&
                    <div className="flex justify-center ">
                        <button onClick={() => navigate('/products')}
                            className="hover:bg-[#3749bb] hover:text-gray-100 border text-[#3749bb]
                           font-semibold md:px-20 px-10 mt-10 py-2 rounded-md"
                        >View More</button>
                    </div>
                }


            </div>
    </div>
  )
}

export default ProSide
