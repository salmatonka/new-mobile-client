import { useQuery } from "@tanstack/react-query";
import useTitle from "../../Hooks/useTitle";
import ProductsCard from "./ProductsCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import './Products.css'
import ProductSection from "./ProductSection";
import { IoMdSearch } from "react-icons/io";
import { Range } from "react-range";
import axios from "axios";
const Products = () => {

    // Price Range slider
    const [iconOpen, setIconOpen] = useState(false)
    const min = 0;
    const max = 10000;
    const step = 100;
    const [localValues, setLocalValue] = useState([min, max]);



    useTitle('Product');

    const { data: mobiles = [], refetch, isLoading } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            // const res = await fetch(`https://repair-mobile-market.onrender.com/usedMobile?page=${currentPage}&filter=${filter}&sort=${sort}&search=${search}`)
            const res = await fetch('https://repair-mobile-market.onrender.com/usedMobile')
            const data = await res.json()
            return data;
        }
    })
    // console.log(mobiles)

    // // ....... pagination  ......
    const [firstPage, setFirstPage] = useState(0);
    const [lastPage, setLastPage] = useState(8);
    const pages = [];
    const pTitle = useLocation();
    const navigate = useNavigate();

    const numOfPage = Math.ceil(mobiles?.length / 8);
    for (let i = 0; i < numOfPage; i++) {
        pages?.push({ num: i + 1 })
    }
    refetch()
    if (isLoading) {
        return (
            <div className="flex justify-center">
                <FadeLoader />
            </div>
        )
    }



    // const [filter, setFilter] = useState('')
    // const [sort, setSort] = useState('')
    // const [search, setSearch] = useState('')
    // const [searchText, setSearchText] = useState('')
    // const [jobs, setJobs] = useState([])

    // const handleReset = () => {
    //   setFilter('')
    //   setSort('')
    //   setSearch('')
    //   setSearchText('')
    // }

    // const handleSearch = e => {
    //   e.preventDefault()

    //   setSearch(searchText)
    // }

    // console.log(search)

    return (
        <div className="">

            <div className="py-2  ">
{/* <div>
    <div>
        <h1>hh</h1>
        <div>

        </div>
    </div>
</div> */}



                <div className="main-products">
                    <div className="left-side">

                        {/* sample: price range start leabl...........*/}
                        {/* <div onClick={() => setIconOpen(!iconOpen)} >
                            <div className="flex justify-between items-center">
                                <h5 className="mb-0" >Price</h5>
                                {
                                    iconOpen ? "up" : "down"
                                }
                            </div>
                        </div>
                        {
                            iconOpen && (
                                <div className="my-20 mx-8">
                                    <Range
                                        label="Select your value"
                                        step={step}
                                        min={min}
                                        max={max}
                                        values={localValues}
                                        onChange={(localValues) => setLocalValue(localValues)}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: "4px",
                                                    width: "100%",
                                                    color: "orange",
                                                    backgroundColor: "blue",
                                                    borderRadius: "4px",
                                                }}
                                            >
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                key={props.key}
                                                style={{
                                                    ...props.style,
                                                    height: "18px",
                                                    width: "18px",
                                                    backgroundColor: "#1D4C9E",
                                                    border: "2px solid white",
                                                    borderRadius: "50%",
                                                    boxShadow: "0px 2px 6px orange"
                                                }}
                                            />
                                        )}
                                    />

                                    <div className="flex justify-between pt-4">
                                        <span>-{localValues[0]}</span>
                                        <span>+{localValues[1]}</span>
                                    </div>

                                </div>
                            )
                        } */}

                        {/* price range end............ */}


                        {/* page: price range start */}
                        <div className="border rounded-md">
                            <div className="text-md font-semibold pl-3 py-3 ">
                                <h5 >Price Range</h5>
                            </div>
                            <hr />
                            <div className="pt-5 pb-4 mx-4">
                                <Range
                                    label="Select your value"
                                    step={step}
                                    min={min}
                                    max={max}
                                    values={localValues}
                                    onChange={(localValues) => setLocalValue(localValues)}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: "4px",
                                                width: "100%",
                                                color: "orange",
                                                backgroundColor: "blue",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            key={props.key}
                                            style={{
                                                ...props.style,
                                                height: "18px",
                                                width: "18px",
                                                backgroundColor: "#1D4C9E",
                                                border: "2px solid white",
                                                borderRadius: "50%",
                                                boxShadow: "0px 2px 6px orange"
                                            }}
                                        />
                                    )}
                                />

                                <div className="flex justify-between pt-2">
                                    <span>-{localValues[0]}</span>
                                    <span>+{localValues[1]}</span>
                                </div>

                            </div>
                        </div>
                        {/* price range end */}


                        {/* <div className="my-20 mx-8">
                            <Range

                                label="Select your value"
                                step={step}
                                min={min}
                                max={max}
                                values={localValues}
                                onChange={(localValues) => setLocalValue(localValues)}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            backgroundColor: "#ccc",
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        key={props.key}
                                        style={{
                                            ...props.style,
                                            height: "42px",
                                            width: "42px",
                                            backgroundColor: "#999",
                                        }}
                                    />
                                )}
                            />

                        </div> */}

                        {/* .........search bar start............ */}
                        <form
                        // onSubmit={handleSearch}
                        >
                            <div className='mt-2 flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                <input
                                    className='px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none 
                                    focus:placeholder-transparent'
                                    type='text'
                                    // onChange={e => setSearchText(e.target.value)}
                                    // value={searchText}
                                    name='search'
                                    placeholder='Enter Job Title'
                                    aria-label='Enter Job Title'
                                />
                                <p className='px-1 md:px-4 py-3 text-md font-medium tracking-wider text-gray-100
                                 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md
                                 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                    <IoMdSearch />
                                </p>

                            </div>
                        </form>

                        {/* .........search bar end............ */}

                        {/* .........category filter start............ */}

                        <div className="my-2">
                            <select
                                // onChange={e => {
                                //     setFilter(e.target.value)
                                //     setCurrentPage(1)
                                // }}
                                // value={filter}
                                name='category'
                                id='category'
                                className='w-full border bg-primary  shadow-sm p-4 rounded-lg'
                            >
                                <option value=''>Filter By Category</option>
                                <option value='iphone'>iphone</option>
                                <option value='sumsang'>Sumsang</option>
                                <option value='Digital Marketing'>Digital Marketing</option>
                            </select>
                        </div>

                        {/* .........category filter start............ */}

                        {/* .........sort filter start............ */}

                        <div className="my-2">
                            <select
                                // onChange={e => {
                                //     setSort(e.target.value)
                                //     setCurrentPage(1)
                                // }}
                                // value={sort}
                                name='sort'
                                id='sort'
                                className='w-full border p-4 rounded-md'
                            >
                                <option value=''>Sort By Deadline</option>
                                <option value='dsc'>Descending Order</option>
                                <option value='asc'>Ascending Order</option>
                            </select>
                        </div>
                        {/* .........sort filter end............ */}

                        <button
                            // onClick={handleReset}
                            className='btn w-full border'>
                            Reset
                        </button>


                    </div>
                    <div className="right-side" >
                        <div className="">
                            <div className="text-center">
                                <h1 className="text-2xl pt-8 font-bold ">Featured Mobiles</h1>
                                <p>Check & Get Your Desired Product!</p>
                            </div>
                            <div className=''>














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
                                                    'border border-yellow-600'} rounded-md border-2
                                                     border-orange text-black py-1 px-3`}
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
                </div>
            </div>
            {/* ......................... */}


        </div>
    );
};

export default Products
