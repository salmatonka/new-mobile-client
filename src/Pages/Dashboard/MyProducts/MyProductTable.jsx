import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';

import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const MyProductTable = ({myProduct}) => {
    const { _id, name, img,  resale_price,yearUsed
    } =  myProduct;
        //  console.log(myProduct)
    const { user } = useContext(AuthContext)
    // const navigate = useNavigate();
    const [productData, setProductData] = useState(null)
    
    const handleDeleteItem = id =>{
        const getPermission = window.confirm('Are you sure want to delete this product?')
      if(getPermission){
        fetch(`https://mobile-market-server.onrender.com/myProducts/${id}`,{
          method: "DELETE",
    
        })
        .then(res=> res.json())
        .then(data=> {
          if(data?.deletedCount > 0){
            console.log(data);
            toast.success('deleted success')
            
          }
    
        })
      }
    
      }
    
    
  
      return (
          <tr className="hover">
            <td></td>
          <td>
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={img} alt='' />
              </div>
            </div>
          </td>
          <td>{name}</td>
          <td>{resale_price}</td>
          <td>{yearUsed}</td>
          <td>
           <Link to={`/dashboard/editProduct/${_id}`}> <button  className="btn bg-purple-300 btn-sm">Edit <FaRegEdit /></button></Link>
          </td>
          <td>
            <button  
            onClick={()=> handleDeleteItem(_id)} 
            className="btn bg-red-300 btn-sm">Delete <MdDelete /></button>
          </td>

       
        </tr>
      );
  };

export default MyProductTable
