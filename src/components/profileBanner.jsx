import React from 'react';
import ProfileImg from '../assets/images/profile.svg'
import { RiPencilFill } from 'react-icons/ri'

const ProfileBanner = () => {
    return (
        <div className='flex  justify-between items-center h-[144px] w-[100%]'>
            <div className='flex gap-x-5 items-center w-[100%]'>
                <div className='w-[96px] h-[96px] rounded-lg relative'>
                    <img src={ProfileImg} alt="" />
                    <div className='w-[24px] h-[24px] rounded-sm bg-[#FAFAFC] text-[#6A38EB] flex justify-center items-center absolute bottom-[-12px] right-[-8px]'>
                        <RiPencilFill />
                    </div>
                </div>
                <div className='w-[100%]'>
                    <div className='flex justify-between w-[100%]'>
                        <h1 className='font-bold text-[24px]'>anastako21</h1>
                        <a href="#" className='text-[#6A38EB] font-medium border-b-2 border-[#6A38EB]'>
                            Edit Username
                        </a>
                    </div>
                    <p className='text-[#788091] text-[14px]'>This is used to display your name publically across the platform. <span className='text-[#5B6270] font-medium'>You can change the public username only once.</span></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileBanner;
