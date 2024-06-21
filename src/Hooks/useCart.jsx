import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://mobile-market-server.onrender.com/carts?email=${user.email}`)
            const data = await res.json()
            return data;
            
        }
    })


    return [cart, refetch]
};

export default useCart
