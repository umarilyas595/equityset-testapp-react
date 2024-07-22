import React from 'react';
import Logo from '../assets/images/logo.svg'
import { FaSearch, FaBars, FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='w-[100%] border-b h-[72px] flex justify-center items-center'>
            <div className="w-[90%] flex justify-between items-center">
                <div className='w-[90px] h-[24px]'>
                    <img src={Logo} alt="" />
                </div>
                <div className='h-[44px] w-auto items-center lg:flex hidden'>
                    <div className='max-w-[323px] h-[44px] bg-[#ECECF4] rounded-xl flex items-center justify-between pl-4 pr-2'>
                        <input type="text" className='bg-transparent border-none focus:outline-none' placeholder='Type “/” to focus' />
                        <div className='w-[32px] h-[32px] bg-[#6A38EB] rounded-xl flex justify-center items-center text-white'>
                            <FaSearch />
                        </div>
                    </div>
                    <div className='flex ml-5 gap-x-2'>
                        <button className='h-[44px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[12px] font-medium text-[#6A38EB]'>Today</button>
                        <button className='h-[44px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[12px] font-medium text-[#787E8C]'>Markets</button>
                        <button className='h-[44px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[12px] font-medium text-[#787E8C]'>Screener</button>
                        <button className='h-[44px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[12px] font-medium text-[#787E8C]'>Ideas</button>
                        <button className='h-[44px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[12px] font-medium text-[#787E8C]'>Learn</button>
                    </div>
                </div>
                <div className="w-[76px] h-[44px] border border-[#F0F0F6] text-[#B9BDC8] rounded-xl px-2 flex items-center justify-between">
                    <FaBars className='cursor-pointer' />
                    <div className='w-[28px] h-[28px] rounded-lg relative bg-[#B9BDC8] text-white cursor-pointer flex items-center justify-center'>
                        <FaUserAlt/>
                        <div className='absolute -top-1 right-[-2px] bg-[red] w-[10px] h-[10px] rounded-full border border-white'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
