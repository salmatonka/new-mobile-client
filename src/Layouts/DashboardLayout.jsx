import { Link, Outlet } from "react-router-dom";
import useTitle from "../Hooks/useTitle";


const DashboardLayout = () => {

    useTitle('Dashboard');

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gradient-to-tr to-purple-200 from-cyan-200 shadow-md shadow-sky-400 flex flex-col items-center justify-center">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-60 min-h-screen bg-gradient-to-tr to-purple-100 from-cyan-100 shadow-md shadow-sky-100 text-base-content flex flex-col justify-between">
                    {/* Sidebar content here */}
                    <div>
                        <li className='pb-4 px-4'>
                            <Link to='/' className="flex items-center p-2 rounded-lg  group w-full bg-gradient-to-tr to-purple-200 from-cyan-200 shadow-md shadow-sky-400">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard/addProduct' className="flex items-center p-2 rounded-lg  group w-full bg-gradient-to-tr to-purple-200 from-cyan-200 shadow-md shadow-sky-400">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">Add Product</span>
                            </Link>
                        </li>
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard/myProduct' className="flex items-center p-2 rounded-lg  group w-full bg-gradient-to-tr to-purple-200 from-cyan-200 shadow-md shadow-sky-400">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">My Product</span>
                            </Link>
                        </li>


                    </div>

                </ul>
            </div>
        </div>
    )
}

export default DashboardLayout

