import React from 'react';

const FooterListing = ({Data}) => {
    return (
        <div>
            <h1 className='text-[14px] font-bold'>{Data}</h1>
            <ul className='text-[12px] mt-3 h-[88px] flex flex-col justify-between'>
                <li>
                    <a href="">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="">
                        Documentation
                    </a>
                </li>
                <li>
                    <a href="">
                        Guides
                    </a>
                </li>
                <li>
                    <a href="">
                        API Status
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterListing;
