import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';
const MyOrders = () => {
    useTitle('MyOrders')
    const { user } = useContext(AuthContext);

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`https://repair-mobile-market.onrender.com/bookings?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    console.log(orders)

    // Deleting order 
    const deleteHandler = id => {
        const proceed = window.confirm('Sure to delete this booking!');
        if (proceed) {
            fetch(`https://repair-mobile-market.onrender.com/bookings/${id}`, {
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
        <>
            {
                orders.length > 0 ?

                    <div className="overflow-x-auto">
                        <h2 className='text-5xl font-bold py-10'>My Orders</h2>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Product</th>
                                    <th>Used Time</th>
                                    <th>Price</th>
                                    <th>Remove</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map((order, i) => <tr
                                        key={order._id}
                                    >
                                        <th>{i + 1}</th>
                                        <td>{order.buyer}</td>
                                        <td>{order.productName}</td>
                                        <td>{order.year}</td>
                                        <td>{order.resale_price}</td>
                                        <td><button onClick={() => deleteHandler(order._id)} className='btn btn-sm btn-error btn-outline'><FaTrashAlt /></button></td>

                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <h2 className='text-5xl text-center text-orange-500'>You didn't place an order yet!</h2>
            }
        </>
    );
};


export default MyOrders
