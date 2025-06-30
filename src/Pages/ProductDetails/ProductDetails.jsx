import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import './ProductDetails.css';
import { FaHome } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductDetails = () => {
    useTitle('DetailsCard');

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const [productData, setProductData] = useState(null)
    const productDetails = useLoaderData();
    const { _id, category, name, details, img, sellerName, date, resale_price, current_price, location, year, rating } = productDetails;

    // console.log(productDetails)

    const handleProductBooking = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // const details = form.details.value;
        // const image_url = form.image_url.value;

        const booking = {
            productName: name,
            buyer: username,
            email,
            phone,
            location,
            details,
            // image_url,
            img,
            resale_price,
            current_price,
            year,
            rating

        }
        console.log(booking)
        fetch(`https://repair-mobile-market.onrender.com/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // toast.success('Product Added Successfully!');
                //             navigate('/dashboard/myOrders');

                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking Confirmed');
                    navigate('/dashboard/myOrders');

                }
                else {
                    toast.error(data.message);
                }

            })
    };

    return (

        <div>

            <div>
                <div className="mt-6 mb-8">
                    <ul className="flex items-center text-lg">
                        <li><Link to="/" ><FaHome /></Link></li><span className="px-3">|</span>
                        <li><Link to={`/usedMobile/${category}`} >{category}</Link></li><span className="px-3">|</span>
                        <li><h1 className="pr-3">{name}</h1></li>
                    </ul>
                </div>
                <div className="details-container">
                    <div className="details-left border ">
                        <img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="details-right ">
                        <div className="">
                            <h1 className="text-2xl font-bold text-[#1159AB] sm:text-3xl">{name}</h1>

                            <div className='md:flex items-center gap-2 py-4 '>
                                <div className='text-sm border bg-primary shadow-md rounded-3xl px-1 py-1 mb-2'>
                                    <h3>Resale Price: ৳ {resale_price}</h3>
                                </div>
                                <div className='text-sm border bg-primary shadow-md rounded-3xl px-1 py-1 mb-2'>
                                    <h3><s>Current Price: ৳{current_price}</s></h3>
                                </div>
                                <div className='text-sm border bg-primary shadow-md rounded-3xl px-1 py-1 mb-2'>
                                    <h3>Resale Price: ৳ {resale_price}</h3>
                                </div>
                                <div className='text-md '>
                                    <h3>Status: {resale_price}</h3>
                                </div>
                            </div>


                            <p className="text-md mt-6 mb-2">{details}</p>

                            {/* <div>
                                <marquee marquee className="" behavior="" direction="" loop="-1" scrollamount="5" width="100%">
                                    অনলাইন থেকে প্রডাক্ট অর্ডার এর পূর্বে হেল্পলাইন থেকে স্টক এবং ডেলিভারী সম্পর্কে
                                    সঠিকভাবে জেনে অর্ডার করার জন্য বিশেষভাবে অনুরোধ করা হচ্ছে * +880 1912345678
                                </marquee>
                            </div> */}
                            <p>Date: {date}</p>
                            <p>Used time: {year} year</p>
                            <p>Location: <span className=''>{location}</span> </p>
                            <h2 className='py-2'>Seller Name: <span className="text-secondary">{sellerName}</span></h2>


                            <div>
                                <marquee marquee className="" behavior="" direction="" loop="-1" scrollamount="5" width="100%">
                                    অনলাইন থেকে প্রডাক্ট অর্ডার এর পূর্বে হেল্পলাইন থেকে স্টক এবং ডেলিভারী সম্পর্কে
                                    সঠিকভাবে জেনে অর্ডার করার জন্য বিশেষভাবে অনুরোধ করা হচ্ছে * +880 1912345678
                                </marquee>
                            </div>

                            <div>
                                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">

                                    <label htmlFor='booking-modal'
                                        //  style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }}
                                        className="bg-secondary hover: rounded-sm w-52 py-3 flex
                                         justify-center items-center text-white mt-3">
                                        Buy Now <FaLongArrowAltRight className='mt-1 ml-3s' /></label>

                                    <div>
                                        <Link
                                            className="bg-secondary hover: rounded-sm w-52 flex 
                                        justify-center items-center  py-3  text-white mt-3"
                                            to='/dashboard/addProduct'><button className="flex 
                                        items-center gap-4">
                                                <BsCart3 />Add To Cart</button>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label onClick={() => setProductData(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">{name} for </h3>
                                            <form
                                                onSubmit={handleProductBooking}
                                            >
                                                <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                                                <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                                                <div className='flex justify-between'>
                                                    <p>Resale Price: ৳{resale_price}</p>
                                                    <p><s> Current Price: ৳{current_price}</s> </p>
                                                </div>
                                                <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                                                <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
                                                {
                                                    !user && <p>Please login</p>
                                                }
                                                <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
                                                    "btn bg-[#1159AB] w-full"
                                                    :
                                                    "btn btn-accent w-full btn-disabled"
                                                } >
                                                </input>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-8">
                <div className="bg-primary shadow-sm border sm:py-4">
                    <ul className="lg:flex items-center gap-6 block">
                        <li className="py-2"><Link>Specification</Link></li>
                        <li className="py-2"><Link>Description</Link></li>
                        <li className="py-2"><Link>Questions (0)</Link></li>
                        <li className="py-2"><Link>Reviews (0)</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails
