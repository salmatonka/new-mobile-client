import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyProductTable from './MyProductTable';
import useTitle from '../../../Hooks/useTitle';

const MyProducts = () => {

  useTitle('MyProduct');
  const { user } = useContext(AuthContext)
  // console.log(user);

  const { data: myProducts = [], refetch, isLoading } = useQuery({
    queryKey: ['myProducts', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://repair-mobile-market.onrender.com/myProducts`)
      const data = await res.json()
      return data;
    }

  })
  // console.log(myProducts)
  return (
    <div className="max-w-[1240px] mx-auto bg-gradient-to-tr to-purple-100 from-cyan-100 lg:px-14">
      <div className=' bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 '>
        {/* <h2>product:{myProducts.length}</h2> */}
        <h3 className='text-3xl text-bold pb-6 text-center'>My Product</h3>
        <div className="overflow-x-auto ">
          <table className="table w-full  bg-gradient-to-tr to-purple-100 from-cyan-100 ">

            <thead>
              <tr>
                <th></th>
                <th>Picture</th>
                <th>Brand Name</th>
                <th>Price</th>
                <th></th>
                <th >Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                myProducts?.map(myProduct => <MyProductTable
                  key={myProduct?.id}
                  myProduct={myProduct}

                ></MyProductTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts
