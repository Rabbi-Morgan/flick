import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import React from 'react';

function EasyDelivery(){
    return(
        <section className='w-full md:p-8 '>
        <div className='text-left easy text-gray-100 p-4 md:p-8 md:rounded-xl w-full h-auto cont'>
            <div><h2 className='text-xl mb-12 md:mb-24'>Delivery service</h2></div>
            <div className='wds'>
                <h1 className='bgWds font-bold text-2xl md:text-6xl md:leading-snug mb-4'>
                    Easy Inter-State <br/> and Intra-State <br/> Delivery
                </h1>
                <p className='smlWds text-sm md:text-xl'>Deliver your goods or ship packages through a trusted traveller <br/> to any part of the country without having to pay so much.</p>                
            </div>
            <div className='crdCont flex flex-wrap gap-10 md:grid md:grid-auto-row py-8 text-white'>
                <div className='cards w-full transition-all cursor-pointer p-8 rounded-xl'>
                    <h1 className='text-xl md:text-3xl font-bold mb-6'>Find a traveller for your package</h1>
                    <p className='text-md'>Travelers <FontAwesomeIcon className='ml-4' icon={faArrowRight}/> </p>
                </div>
                <div className='cards w-full transition-all cursor-pointer p-8 rounded-xl'>
                    <h1 className='text-xl md:text-3xl font-bold mb-6'>Become a traveller </h1>
                    <p className='text-md'>Travelers <FontAwesomeIcon className='ml-4' icon={faArrowRight}/> </p>
                </div>
                <div className='cards w-full transition-all cursor-pointer p-8 rounded-xl'>
                    <h1 className='text-xl md:text-3xl font-bold mb-6'>Let us help you find a customer</h1>
                    <p className='text-md'>Travelers <FontAwesomeIcon className='ml-4' icon={faArrowRight}/> </p>
                </div>
            </div>
        </div>
        </section>
    );
}
export default EasyDelivery;