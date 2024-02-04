import React from 'react';
import './Marquee.css';
import Marquee from "react-fast-marquee";

const MarqueeCom = () => {
    return (
        <div className='marq'>
            <Marquee>
                To contact us for more details, please contact us for immediate assistance.
            </Marquee>
        </div>
    );
};

export default MarqueeCom;
