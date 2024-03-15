"use client"
import React from 'react'
// import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-transparent py-3 px-8 fixed top-0 w-full z-50 h-[80px]shadow-lg'>
                <div className='md:w-[10rem] w-[40px] flex gap-4 justify-center items-center'>
                    <img src='../assets/images/tv.png' className='w-[50px] h-[50px] object-cover' />
                    <p className='font-bold text-white'>Movie Box</p>
                </div>
                <div className='relative group'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className='absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4'>
                        <circle cx="8.03713" cy="8.11061" r="6.76271" stroke="#004B95" strokeWidth="2" />
                        <path d="M14.7998 14.8735L20.2744 20.0261" stroke="#004B95" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input type='text' className='bg-transparent lg:w-[525px] sm:w-[325px] border outline-white rounded-lg text-sm text-white px-4 py-2  ' placeholder='What do you want to watch?  ' />
                </div>
                <div className='flex items-center gap-8 relative'>
                    <div className='flex items-center gap-1 relative cursor-pointer'>
                        <div className='flex items-center gap-4' >
                            <p className='text-white'>Sign In</p>
                            <img src='../assets/images/Menu.png' />
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Navbar