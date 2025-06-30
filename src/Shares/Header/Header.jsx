import React, { useContext } from 'react'
import './Header.css';
import { FaHome, FaBloggerB, FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars4 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import useCart from '../../Hooks/useCart';
import fLogo from '../../assets/iphone.png'
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(toast.warning('user logOut...!'))
      .catch(error => toast.error(error.message))
  }
  const [cart] = useCart()
  return (
    <div className='sticky top-0 z-50'>
      <div className="nav  bg-primary text-black shadow-sm">
        <Link to="/" className="logo flex items-center">
         <img src={fLogo} alt="img" className='h-6 w-8 ' />
        ST Shop
        </Link>
        {/* <div className="logo "></div> */}
        <label htmlFor="btn" className='icon'>
          <HiOutlineBars4 />
        </label>
        <input type="checkbox" name="" id="btn" />

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <label htmlFor="btn-1" className='show'>Categories +</label>
            <a href="">Categories</a>
            <input type="checkbox" name="" id="btn-1" />

            <ul>
              <li><a href='/usedMobile/nokia'>Nokia</a></li>
              <li><a href='/usedMobile/vivo'>Vivo</a></li>
              <li><a href='/usedMobile/iphone'>iphone</a></li>
              <li><a href='/usedMobile/sumsung'>Samsung</a></li>
              <li><a href='/usedMobile/realMi'>RealMi</a></li>
              <li><a href='/usedMobile/walton'>Walton</a></li>
            </ul>
          </li>
          <li><Link to="/offers" aria-label="offers" title="offers">Offers</Link></li>
          <li><Link to="/blog" aria-label="blog" title="blog">Blog</Link></li>
          <li><Link to="/aboutUs" aria-label="aboutUs" title="aboutUs">AboutUs</Link></li>
          <li><Link to="/contactUs" aria-label="ContactUs" title="ContactUs">ContactUs</Link></li>

          <li><Link to="/dashboard/cart">
            <div className="indicator">
              <span className="indicator-item mt-5 pl-1">+{cart?.length}</span>
              <button className="">🛒</button>
            </div>
          </Link></li>

          {
            user?.uid ? (<>
              <li>
                <Link to="/dashboard" aria-label="Dashboard" title="Dashboard">Dashboard</Link>
              </li>
              <li>
                <button className='pt-6' onClick={handleLogOut} aria-label="LogOut" title="LogOut"> LogOut</button>
              </li>
            </>) : (<>
              <li>
                <Link to="/logIn" aria-label="LogIn" title="LogIn">LogIn</Link>
              </li>
            </>)
          }

        </ul>
      </div>
    </div>

    //  <nav className="bg-primary text-white px-8 py-4 shadow-md">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="text-xl font-bold">MyLogo</div>

    //     <ul className="hidden md:flex space-x-6">
    //       <li><a href="#" className="hover:text-gray-300">Home</a></li>
    //       <li><a href="#" className="hover:text-gray-300">About</a></li>
    //       <li><a href="#" className="hover:text-gray-300">Services</a></li>
    //       <li className="relative group">
    //         <a href="#" className="hover:text-gray-300">Mega Menu</a>
    //         {/* Mega Menu */}
    //         <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white text-black shadow-lg p-6 w-[600px] justify-between z-50">
    //           <div>
    //             <h4 className="font-bold mb-2">Category 1</h4>
    //             <ul>
    //               <li><a href="#" className="block py-1 hover:underline">Link 1</a></li>
    //               <li><a href="#" className="block py-1 hover:underline">Link 2</a></li>
    //             </ul>
    //           </div>
    //           <div>
    //             <h4 className="font-bold mb-2">Category 2</h4>
    //             <ul>
    //               <li><a href="#" className="block py-1 hover:underline">Link 3</a></li>
    //               <li><a href="#" className="block py-1 hover:underline">Link 4</a></li>
    //             </ul>
    //           </div>
    //           <div>
    //             <h4 className="font-bold mb-2">Category 3</h4>
    //             <ul>
    //               <li><a href="#" className="block py-1 hover:underline">Link 5</a></li>
    //               <li><a href="#" className="block py-1 hover:underline">Link 6</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </li>
    //       <li><a href="#" className="hover:text-gray-300">Blog</a></li>
    //       <li><a href="#" className="hover:text-gray-300">Contact</a></li>
    //     </ul>

    //     {/* Mobile menu icon */}
    //     <div className="md:hidden">
    //       <button className="text-white">☰</button>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Header
