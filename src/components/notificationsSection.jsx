import React from 'react';

const NotificationsSection = () => {
    return (
        <>
            <h1 className='mb-2 text-[20px] font-medium mt-10 ml-3'>Notifications</h1>
            <div className='max-w-[848px] px-5 py-2 bg-white rounded-xl border-2 border-[#8C94AB]'>
                <p className='text-[14px] font-medium'>Select which types of emails you would like to receive</p>
                <div className='flex gap-x-4 border-b pb-5 mt-4 border-[lightgray] items-start'>
                    <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                    <div className='sm:w-[50%]'>
                        <div className='sm:flex gap-x-3 items-end'>
                            <h1 className='text-[#111827] font-bold mt-1'>Investor Summary</h1>
                            <div className='w-[100px] h-[20px] flex justify-center items-center text-white text-[12px] font-medium bg-[#6A38EB] rounded-lg sm:mt-0 mt-2'>
                                Recommended
                            </div>
                        </div>
                        <p className='text-[14px] text-[#5B6270] sm:mt-1 mt-3'>Important product updates from Equityset. New features and new research tools</p>
                    </div>
                </div>
                <div className='flex gap-x-4 border-b pb-5 mt-4 border-[lightgray] items-start'>
                    <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                    <div className='sm:w-[50%]'>
                        <div className='flex gap-x-3 items-end'>
                            <h1 className='text-[#5B6270] font-bold mt-1'>Important updates</h1>
                        </div>
                        <p className='text-[14px] text-[#5B6270] mt-1'>Important product updates from Equityset. New features and new research tools</p>
                    </div>
                </div>
                <div className='flex gap-x-4 border-b pb-5 mt-4 border-[lightgray] items-start'>
                    <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                    <div className='sm:w-[50%]'>
                        <div className='flex gap-x-3 items-end'>
                            <h1 className='text-[#5B6270] font-bold mt-1'>Marketing Campaigns</h1>
                        </div>
                        <p className='text-[14px] text-[#5B6270] mt-1'>Offers, discounts, referrals and other exclusive offers</p>
                    </div>
                </div>
                <div className='flex gap-x-4 pb-8 mt-4 items-start'>
                    <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                    <div className='sm:w-[50%]'>
                        <div className='flex gap-x-3 items-end'>
                            <h1 className='text-[#5B6270] font-bold mt-1'>Account and Security</h1>
                        </div>
                        <p className='text-[14px] text-[#5B6270] mt-1'>Emails about suspicious login attempts</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationsSection;
