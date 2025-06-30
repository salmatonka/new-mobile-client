import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineSync } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';


const ChooseOption = () => {
    return (
        <div className='pt-6'>
            <div className=' mx-auto text-center px-4 py-6'>
                <h3 className='text-center text-2xl font-bold pb-4 mt-6'>Why Choose Us</h3>
                <p className='pt-1 pb-8'>mMarket.com – Recognize the today’s Technology gets obsolete tomorrow so, we keep hawk’s eye on the International trend and bring a solution which is essential, important and worthy to invest. mMarket.com have dedicated distribution point in all major cities all over Bangladesh to ensure faster delivery & reliable service.</p>


                <div>
                    <div className="container p-2 mx-auto sm:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">



                        <div className="sm: duration-300 transform  border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                            <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-md">
                                <AiFillSetting className='text-2xl ml-20' ></AiFillSetting>

                                <h6 className="mb-2 font-semibold leading-5">Great Value</h6>
                                <p className="text-sm text-gray-900 sm:px-2">
                                    We get you the best value for your money
                                </p>
                            </div>
                        </div>
                        <div className="duration-300 transform border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                            <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-md">
                                <BiHeadphone className='text-2xl ml-20' ></BiHeadphone>

                                <h6 className="mb-2 font-semibold leading-5">24/7 SUPPORT</h6>
                                <p className="text-sm text-gray-900 sm:px-2">
                                    We’re here to support you around the clock
                                </p>
                            </div>
                        </div>
                        <div className="duration-300 transform  border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                            <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-md">
                                <AiOutlineSync className='text-2xl ml-20 ' ></AiOutlineSync>

                                <h6 className="mb-2 font-semibold leading-5">Warranty Policy</h6>
                                <p className="text-sm text-gray-900 sm:px-2">Policy Our warranty policy will give you peace of mind
                                </p>
                            </div>
                        </div>
                        <div className="duration-300 transform  border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                            <div className="h-full lg:p-5 border border-l-0 rounded-r shadow-md">
                                <AiOutlineShoppingCart className='text-2xl ml-20' ></AiOutlineShoppingCart>

                                <h6 className="mb-2 font-semibold leading-5">Free Shipping</h6>
                                <p className="text-sm text-gray-900">We often provide free shipping for our products
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseOption
