import React from 'react';

const TriggerTableOne = () => {
    return (
        <div className='max-w-[848px] px-3 py-2 bg-white rounded-xl border-2 border-[#8C94AB]  mt-3 overflow-hidden'>
            <div className='flex justify-between'>
                <p className='sm:text-[16px] text-[14px] font-bold text-[#5B6270]'>Stock Rating Changes (2)</p>
                <a href="" className='text-[#6A38EB] text-[14px] font-medium'>See less</a>
            </div>
                <table class="table mt-4">
                    <thead>
                        <tr className="text-[14px] text-[#788091]">
                            <th scope="col"></th>
                            <th scope="col">When</th>
                            <th scope="col">SMS</th>
                            <th scope="col">Email</th>
                            <th scope="col">In Summary</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p className='text-[14px] font-bold'>APPL</p>
                                <p className='text-[12px] text-[#6B7280]'>Apple Computers Inc.</p>
                            </th>
                            <td className="pt-4">
                                <p className='text-[12px] text-[#6B7280]'>Rating Change : <span className='font-bold text-black'>ANY</span> </p>
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className='text-[14px] font-bold'>DIS</p>
                                <p className='text-[12px] text-[#6B7280]'>Walt Disney Co</p>
                            </th>
                            <td className="pt-4">
                                <p className='text-[12px] text-[#6B7280]'>Rating Change : <span className='font-bold text-black'>BUY</span> </p>
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className='text-[14px] font-bold'>DELL</p>
                                <p className='text-[12px] text-[#6B7280]'>Securites that hit their <br />Fair Value</p>
                            </th>
                            <td className="pt-4">
                                <p className='text-[12px] text-[#6B7280]'>Rating Change : <span className='font-bold text-black'>SELL</span> </p>
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                            <td>
                                <input type="checkbox" className="w-[16px] h-[16px] rounded-lg mt-2 inp_bg text-[#849DAB] pl-3 focus:outline-none border-none" placeholder='konstantinos.a@toptal.com' />
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
}

export default TriggerTableOne;
