import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import { FaHome, FaBloggerB } from "react-icons/fa";
import {  MdDashboardCustomize } from "react-icons/md";
import { BsBoxArrowInLeft } from "react-icons/bs";

const Navbar = () => {
    const { user, signOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
      signOut()
        .then(toast.warning('user logOut...!'))
        .catch(error => toast.error(error.message))
    }


    return (
      <div className=''>
        <div className="navbar  bg-gradient-to-tr to-purple-300 from-cyan-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-box w-52">
                <li>
                  <Link
                    to="/"
                    aria-label="Home"
                    title="Home"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    <FaHome />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutUS"
                    aria-label="aboutUS"
                    title="aboutUS"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    <FaBloggerB />
                    AboutUs
                  </Link>
                </li>
               
                {
                  user?.uid ? (<>

                    <li>
                      <Link
                        to="/dashboard"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Dashboard"
                        title="Dashboard"
                      >
                         <MdDashboardCustomize />
                        Dashboard
                      </Link>
                    </li>
  
                   
                    <li>
                      <button
                        onClick={handleLogOut}
  
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="LogOut"
                        title="LogOut"
                      >
                         <BsBoxArrowInLeft />  
                        LogOut
                      </button>
                    </li>
                    
                    <li>
                    <h3
                        
                        className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Dashboard"
                        title="Dashboard"
                      >
                       {user?.displayName}
                      </h3>
                  </li>

                    
                  </>)
                    :
                    (<>
                      <li>
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Login"
                          title="Login"
                        >
                          Login
                        </Link>
                      </li>
                    </>)
                }
              </ul>
            </div>
            <Link to='/' className="ml-2 lg:pl-20 text-xl font-bold tracking-wide"> mMarket.com</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
  
              <li>
                <Link
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  aria-label="aboutUs"
                  title="aboutUs"
                  className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                 AboutUs
                </Link>
              </li>
              
  
              {
                user?.uid ? (<>


                  <li>
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Dashboard"
                      title="Dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
  
              
                  <li>
                    <button
                      onClick={handleLogOut}
  
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="LogOut"
                      title="LogOut"
                    >
                      LogOut
                    </button>
                  </li>

                  <li>
                    <h3
                        
                        className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Dashboard"
                        title="Dashboard"
                      >
                       {user?.displayName}
                      </h3>
                  </li>



                </>)
                  :
                  (<>
                    <li>
                      <Link
                        to="/login"
                        className="inline-flex items-center justify-center h-12  font-medium tracking-wide  transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Login"
                        title="Login"
                      >
                        Login
                      </Link>
                    </li>
                  </>)
              }
  
            </ul>
          </div>
  
        </div>
      </div>
    );
  };

export default Navbar
