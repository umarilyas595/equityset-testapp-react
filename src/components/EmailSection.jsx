import React from 'react';

const EmailSection = () => {
    return (
        <div className='max-w-[848px] flex gap-x-2 p-5 bg-white rounded-xl mt-4 border-2 border-[#8C94AB]'>
            <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <div className='sm:flex items-center sm:gap-x-2'>
                    <input type="email" className="sm:w-[312px] h-[42px] rounded-lg mt-2 inp_bg text-[#849DAB] px-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                    <p className='text-[14px] font-semibold sm:mt-0 mt-3'>This is the same email you have in your profile account. </p>
                </div>
            </div>
        </div>
    );
}

export default EmailSection;
