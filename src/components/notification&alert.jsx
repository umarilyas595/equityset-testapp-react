import React from 'react';
import EmailSection from '../components/EmailSection'
import MobilePhoneSection from './MobilePhoneSection';
import UpdateValue from './updateValue';
import NotificationsSection from './notificationsSection';
import TriggersSection from './TriggersSection';

const NotificationAlert = () => {
    return (
        <div className='bg-[#FAFAFC] my-10 sm:p-5 p-2'>
            <h1 className='text-[24px] font-bold'>Notification {"&"} Alerts</h1>
            <p className='text-[14px] text-[#788091]'>Customize the notification and alerts experience</p>
            <EmailSection/>
            <MobilePhoneSection/>
            <UpdateValue/>
            <NotificationsSection/>
            <TriggersSection/>
            
        </div>
    );
}

export default NotificationAlert;
