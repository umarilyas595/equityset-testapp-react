import React from 'react';
import Logo from '../assets/images/logo.svg'
import FooterListing from './FooterListing';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

const Footer = () => {
    return (
        <div className='w-[90%] border-t border-[#5B6270] py-5'>
            <img src={Logo} alt="" />
            <div className='mt-5 flex justify-between w-[100%] items-end'>
                <div className='flex flex-wrap gap-3 lg:w-[50%] md:w-[70%] w-[100%] justify-between items-start'>
                    <FooterListing Data={"Support"} />
                    <FooterListing Data={"Product"} />
                    <FooterListing Data={"Education"} />
                    <FooterListing Data={"About"} />
                </div>
            </div>
            <div className="text-[14px] flex lg:flex-row flex-col lg:justify-between justify-center items-center mt-12">
                <div className='flex flex-wrap items-center gap-x-2'>
                    <h1>©2022 Equityset, Inc. All rights reserved</h1>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Sitemap</a>
                </div>
                <div className='h-[24px] w-[216px] flex justify-between text-[#788091] lg:mt-0 mt-3'>
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsGithub />
                    <TbWorld />
                </div>
            </div>
            <div className='pt-5 mt-5 border-t border-[#5B6270]'>
                <p className='text-[14px] text-[#5B6270]'>Disclaimers: EquitySet LLC is not operated by a broker, a dealer, or a registered investment adviser. Under no circumstances does any information posted on EquitySet LLC represent an individualized recommendation to buy or sell a security. The information on this site, and in its related emails and newsletters, is not intended to be, nor does it constitute individual investment advice or recommendations. The users may buy and sell securities before and after any particular article and report and information herein is published, with respect to the securities discussed in any article and report posted herein. In no event shall EquitySet LLC be liable to any member, guest or third party for any damages of any kind arising out of the use of any content or other material published or available on EquitySet LLC, or relating to the use of, or inability to use, equitysetdata.com or any content, including, without limitation, any investment losses, lost profits, lost opportunity, special, incidental, indirect, consequential or punitive damages. Past performance is a poor indicator of future performance. The information on this site is in no way guaranteed for completeness, accuracy or in any other way. The companies listed on this website are not affiliated with EquitySet LLC .</p>
            </div>
            <div className='mt-5 w-[100%] md:h-[23px] bg-[#ECECF4] text-[#6A38EB] flex justify-center items-center md:px-0 px-3 md:py-0 py-2'>
                <p className='text-[12px]'>Equityset does not provide individualized investment advice or recommendations for individual portfolios.</p>
            </div>
        </div>
    );
}

export default Footer;
