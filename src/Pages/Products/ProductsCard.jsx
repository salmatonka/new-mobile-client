import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useCart from "../../Hooks/useCart";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductsCard = ({ mobile }) => {
    useTitle('MobilesCard');
    const { _id, name, details, img, date, resale_price, current_price } = mobile;
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
                resale_price
            }
            
   
    fetch('https://mobile-market-server.onrender.com/carts', {
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
        <div className='py-6'>
            <div className="max-w-lg p-4 pb-8 shadow-lg rounded-md">

                <div className="">
                    <div className="">
                        <img src={img} alt="" className=" object-center w-full bg-gray-100 rounded-md h-72 " />
                        <div className="flex items-center text-md px-6 py-4">
                            <span>Posted Date: {date}</span>

                        </div>

                    </div>
                    <div className="space-y-4 px-6">
                        <div className="">
                            <h2 className="text-2xl text-[#1159AB] font-bold pt-2 pb-4">{name}</h2>
                            <h4 className=" tb-2 py-4"> <span className="text-[#1159AB] font-bold ">Details:</span> {details?.slice(0, 60)}...</h4>
                            < h4 className="text-lg  tb-2 ">Resale Price: ${resale_price}</h4>
                            <h4 className="text-lg  pb-10"><s>Original Price: ${current_price}</s></h4>

                        </div>
                    </div>

                </div>
                
                <div >
                <button
                    onClick={handleAddToCart}
                    style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }} className='fond-semibold bg-gradient-to-tr to-purple-200 from-cyan-200 w-full py-2 rounded-lg'>Add to Cart</button>

                <Link className=' flex justify-center' to={`/mobile/${_id}`}><button style={{ boxShadow: "10px 10px 5px gray", fontSize: "18px" }} className=' fond-semibold bg-gradient-to-tr to-purple-200 from-cyan-200 w-full mt-4 py-2 rounded-lg'>Details</button></Link>
                </div>

            </div>



        </div>


    );
};


export default ProductsCard
