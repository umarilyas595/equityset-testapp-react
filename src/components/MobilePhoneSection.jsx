import React from 'react';
import { BiErrorCircle } from 'react-icons/bi'
import { AiFillCaretDown } from 'react-icons/ai'

const MobilePhoneSection = () => {
    return (
        <div className='max-w-[848px] flex gap-x-2 p-5 bg-white rounded-xl mt-10 border-2 border-[#8C94AB]'>
            <div className='flex flex-col w-full'>
                <label htmlFor="email">Mobile Number</label>
                <div className='sm:flex justify-between'>
                    <div className='sm:w-[312px] h-[42px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 flex items-center gap-x-2 sm:mb-0 mb-3'>
                        <BiErrorCircle className='text-[20px]' />
                        <input type="email" className=" focus:outline-none border-none bg-transparent" placeholder='Not provided' />
                    </div>
                    <a href="" className='text-[14px] h-[20px] font-medium text-[#6A38EB] border-b-2 border-[#6A38EB]'>+ Add Phone Number</a>
                </div>
                <div className='sm:flex items-center gap-x-7 mt-7 border-b border-[lightgray] pb-10'>
                    <h1 className='text-[14px]'>Do not deliver SMS between :</h1>
                    <div className='flex sm:flex-row flex-col items-center gap-x-2 sm:mt-0 mt-3'>
                        <button className='w-[153px] h-[40px] rounded-lg bg-white flex justify-center items-center gap-x-3 border border-[#DBDDE4] text-[#5B6270]'>
                            <p>No restriction</p>
                            <AiFillCaretDown />
                        </button>
                        <h1 className='text-[14px] sm:my-0 my-2'>Until</h1>
                        <button className='w-[153px] h-[40px] rounded-lg bg-white flex justify-center items-center gap-x-3 border border-[#DBDDE4] text-[#5B6270]'>
                            <p>No restriction</p>
                            <AiFillCaretDown />
                        </button>
                    </div>
                </div>
                <div className='sm:w-[80%]  text-[12px] font-medium text-[#788091] mt-1'>
                    <p>By providing your phone number, you agree to receive text messages from triggers you enable on your account. Equityset never will share your phone number with third parties.</p>
                </div>
            </div>
        </div>
    );
}

export default MobilePhoneSection;
