import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Trust(){
    return (
        <div className="bus flex-col flex md:flex-row text-white justify-between">
            <div className="p-8 md:flex md:justify-center md:flex-col bg-blue-500 text-left md:w-1/2">
                <h1 className="font-bold text-2xl text-center md:text-5xl md:text-left mb-4 md:mb-10">Why clients turn to <span className="logo">FLICK</span></h1>
                <ul className="md:text-2xl">
                    <li className="font-bold mb-3 md:mb-6">
                        <FontAwesomeIcon className="mr-2" icon={faStar}/>Safe and Secure
                        <ul className="text-gray-400 font-normal ml-6">
                            <li>Good are transported safely</li>
                            <li>No report of theft</li>
                        </ul>
                    </li>
                    <li className="font-bold mb-3 md:mb-6">
                        <FontAwesomeIcon className="mr-2" icon={faStar}/>Affordable
                        <ul className="text-gray-400 font-normal ml-6">
                            <li>Good service for a stipend</li>
                            <li>Good payment pkan</li>
                        </ul>
                    </li>
                    <li className="font-bold mb-3 md:mb-6">
                        <FontAwesomeIcon className="mr-2" icon={faStar}/>24/7 Customer Support
                        <ul className="text-gray-400 font-normal ml-6">
                            <li>Our support team is available to help</li>
                            <li>anytime, anywhere</li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
            <div className="md:w-1/2">
                <img className="w-full" src={window.location.origin + '/assets/images/cus.jpg'} alt=""/>
            </div>
        </div>
    )
}
export default Trust;