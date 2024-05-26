import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const MyProductTable = ({myProduct}) => {

  
  // const myProducts = useLoaderData();
  const { id, name, img,  resale_price } =  myProduct;
        //  console.log(myProduct)




    const { user } = useContext(AuthContext)
    // const navigate = useNavigate();
    const [productData, setProductData] = useState(null)

    const handleDeleteItem = id =>{
      const getPermission = window.confirm('Are you sure want to delete this product?')
    if(getPermission){
      fetch(`http://localhost:3000/product/${id}`,{
        method: "DELETE",
  
      })
      .then(res=> res.json())
      .then(data=> {
        if(data.deletedCount > 0){
          console.log(data);
          toast.success('deleted success')
        }
  
      })
    }
  
    }
  
 
  
      return (
          <tr className="hover">
          <td>
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={img} alt='' />
              </div>
            </div>
          </td>
          <td>{name}</td>
          <td>{resale_price}</td>
          <td>
           <Link to={`/dashboard/editProduct/${id}`}> <button  className="btn bg-purple-300 btn-md">Edit Product</button></Link>
          </td>
          <td>
            <button onClick={()=> handleDeleteItem(id)} className="btn bg-red-300 btn-md">Delete</button>
          </td>

       
        </tr>
      );
  };
export default MyProductTable
