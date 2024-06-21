import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';
const Carts = () => {
    useTitle('Carts')
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + Number(item.resale_price), 0);
  
  
  
  
    const handleDelete = id => {

        const proceed = window.confirm('Sure to delete this booking!');
        if (proceed) {
            fetch(`https://mobile-market-server.onrender.com/carts/${id}`, {
                mode: 'no-cors',
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(() => {
                    toast.success('Deleted Successfully!');
                    refetch();
                });
        };
           
    }
  
    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                {cart.length ? <Link to="/dashboard/payment">
                      <button className="btn btn-primary">Pay</button>
                  </Link> :
                  <button disabled className="btn btn-primary">Pay</button>
                  }
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.resale_price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }
  
  
                    </tbody>
                </table>
            </div>
        </div>
    );
  };

export default Carts
