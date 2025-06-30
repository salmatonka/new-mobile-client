import React from 'react'
import './TopBar.css'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const TopBar = () => {
    return (
        <div className='lg:flex hidden py-2 px-10 bg-black text-white'>
            <div className='top-container'>
                <div className='flex gap-6'>
                    <a className='flex items-center gap-2' href="+880 1912345678"><BsTelephone />+880 1912345678 </a>
                    | <a className='flex items-center gap-2' href="mailto:st@gmail.com"><CiMail />st@gmail.com</a>
                </div>
                <div className=''>
                    <marquee className="" behavior="" direction="" loop="-1" scrollamount="5" width="100%">
                        SAVE MORE ON APP   ||   MMARKERT.COM DONATES  || SELL ON MMARKERT.COM || CUSTOMER CARE   ||   TRACK MY ORDER   ||   SIGNUP / LOGIN   ||
                        MMARKERT.COM AFFILIATE PROGRAM   ||   ভাষা</marquee>
                </div>
            </div>
        </div>
    )
}

export default TopBar
