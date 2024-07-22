import React from 'react';
import TriggersCloseBox from './TriggersCloseBox';
import TriggerTableOne from './TriggerTableOne';
import TriggerTableTwo from './TriggerTableTwo';

const TriggersSection = () => {
    return (
        <>
            <h1 className='mb-2 text-[20px] font-medium mt-10 ml-3'>Triggers {"(2)"}</h1>
            <TriggersCloseBox Title={"Stock Price and Fair Value & Price (0)"} />
            <TriggerTableOne />
            <TriggerTableTwo />
            <TriggersCloseBox Title={"Dividents & Earning (1)"} />
            <TriggersCloseBox Title={"Valuation Technical Analysis (0)"} />
            <TriggersCloseBox Title={"Ideas & News (0)"} />
        </>
    );
}

export default TriggersSection;
