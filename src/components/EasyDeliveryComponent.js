import React, {Component} from 'react';

function EasyDelivery(){
    return(
        <div className='cont flex justify-between '>
            <div className='wds'>
                <h1 className='bgWds font-bold text-5x1'>
                    Easy Inter-State Delivery
                </h1>
                <p className='smlWds'>Pleasant environment for customers, connecting buyer and student with ease</p>
            </div>
            <div className='midImg'>
                <img className="w-full" src={window.location.origin + '/assets/images/unsplash_fMntl8HAAB8.svg'}/>
            </div>
        </div>
    );
}
export default EasyDelivery;