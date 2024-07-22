import React from 'react';

const UpdateValue = () => {
    return (
        <>
            <h1 className='mb-2 text-[20px] font-medium mt-10 ml-2'>Fair Value updates</h1>
            <div className='max-w-[848px] p-5 bg-white rounded-xl border-2 border-[#8C94AB]'>
                <div className='sm:flex gap-x-2 border-b pb-5 border-[lightgray]'>
                    <div className='sm:w-[50%]'>
                        <h1 className='text-[#5B6270] font-bold'>Daily</h1>
                        <p className='text-[14px] text-[#5B6270]'>Securites that hit their Fair Value</p>
                    </div>
                    <div className='flex sm:w-[50%] gap-x-14 sm:mt-0 mt-3'>
                        <div className='flex flex-col items-center gap-x-2'>
                            <label htmlFor="" className='text-[14px] font-medium'>SMS</label>
                            <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                        </div>
                        <div className='flex flex-col items-center gap-x-2'>
                            <label htmlFor="" className='text-[14px] font-medium'>Email</label>
                            <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                        </div>
                    </div>
                </div>
                <div className='sm:flex gap-x-2 pt-5'>
                    <div className='sm:w-[50%]'>
                        <h1 className='text-[#5B6270] font-bold'>Weekly</h1>
                        <p className='text-[14px] text-[#5B6270]'>Securites that hit their Fair Value</p>
                    </div>
                    <div className='flex sm:w-[50%] gap-x-14 sm:mt-0 mt-3'>
                        <div className='flex flex-col items-center gap-x-2'>
                            <label htmlFor="" className='text-[14px] font-medium'>SMS</label>
                            <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                        </div>
                        <div className='flex flex-col items-center gap-x-2'>
                            <label htmlFor="" className='text-[14px] font-medium'>Email</label>
                            <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateValue;
