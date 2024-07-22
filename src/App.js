import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md'
import Navbar from './components/Navbar'
import ProfileBanner from './components/profileBanner';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import NotificationAlert from './components/notification&alert';

const App = () => {
    return (
        <div className='w-[100%] flex flex-col items-center'>
            <Navbar />
            <div className='mt-3 w-[90%]'>
                <h1 className='text-[12 px] text-[#B9BDC8] flex items-center'>Markets <span className='mx-2'><MdArrowForwardIos /></span> Profile</h1>
            </div>
            <div className='sm:w-[80%] w-[95%] my-28'>
                <ProfileBanner />
                <Tabs/>
                <NotificationAlert/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
