import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useCart from "../../Hooks/useCart";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const ProductsCard = ({ mobile }) => {
    useTitle('MobilesCard');
    const { _id, name, details, img, rating, resale_price, current_price } = mobile;
    // console.log(mobile)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                serviceId: _id,
                email: user.email,
                name,
                img,
                resale_price, rating
            }


            fetch('https://repair-mobile-market.onrender.com/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // if (loading) {
                    //     return <Spinner />
                    // }
                    toast.success('Product Added Successfully!');
                    navigate('/dashboard/cart');



                })
        }
    }


    return (
        <div className='py-2'>
            <div
                style={{ boxShadow: "10px 10px 5px gray", }}
                className="max-w-lg py-3 pr-3 rounded-md">

                <div>
                    <div>
                        <img src={img} alt="" className=" object-center w-full  rounded-md h-52 " />
                        {/* <div className="flex items-start text-md px-6 py-4">
                            <span>Posted Date: {date}</span>

                        </div> */}

                    </div>
                    <div className="space-y-4 pl-2">
                        <div className="">
                            <h2 className="text-md font-bold pt-4 pb-4">{name}</h2>
                            <h4 className="pt-1">{details?.slice(0, 40)}... </h4>
                            {/* <h2 className=" flex items-start"><span className="text-[#1159AB] font-bold ">Details:</span> {details?.slice(0, 60)}...</h2> */}
                            <div className="flex gap-5 pt-2">
                                <h6 className="text-[#1159AB] font-semibold">BDT:{resale_price}</h6>
                                <h6 ><s>BDT:{current_price}</s></h6>
                            </div>
                             <Rating
                             className="pb-3 pt-1"
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                            {/* <h6 className="pb-3">Rating: {rating}</h6> */}
                        </div>
                    </div>

                </div>

                <div >
                    <button
                        onClick={handleAddToCart}
                        className='fond-semibold bg-secondary text-gray-100  hover:bg-info w-full py-1 rounded'>Add to Cart</button>

                    <Link className='flex justify-center' to={`/mobile/${_id}`}><button className='fond-semibold bg-secondary hover:bg-info text-gray-100 w-full mt-2 py-1 rounded'>Details</button></Link>
                </div>

            </div>



        </div>


    );
};


export default ProductsCard
