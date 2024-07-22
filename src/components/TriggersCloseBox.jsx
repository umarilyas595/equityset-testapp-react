import React from 'react';

const TriggersCloseBox = ({Title}) => {
    return (
        <div className='max-w-[848px] px-3 py-2 bg-white rounded-xl border-2 border-[#8C94AB] flex justify-between mt-3'>
            <p className='sm:text-[16px] text-[14px] font-bold text-[#5B6270]'>{Title}</p>
            <a href="" className='text-[#6A38EB] text-[14px] font-medium'>See less</a>
        </div>
    );
}

export default TriggersCloseBox;
