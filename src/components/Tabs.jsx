import React from 'react';

const Tabs = () => {
    return (
        <div className='w-[100%] overflow-hidden'>
            <div className='py-10 flex items-center gap-x-8 h-[64px] overflow-x-auto overflow-y-hidden w-[700px]'>
                <button className='h-[64px] w-[51px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[14px] font-medium text-[#787E8C]'>Profile</button>
                <button className='h-[64px] w-[150px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[14px] font-medium text-[#787E8C]'>Pricing {"&"} Billing</button>
                <button className='h-[64px] w-[180px] px-4 flex items-center bg-transparent focus:outline-none text-[14px] font-medium text-[#6A38EB] border-b-2 border-[#6A38EB]'>Notification {"&"} Alerts</button>
                <button className='h-[64px] w-[150px] px-4 flex items-center bg-transparent border-none focus:outline-none text-[14px] font-medium text-[#787E8C]'>My portofolio</button>
            </div>
        </div>
    );
}

export default Tabs;
