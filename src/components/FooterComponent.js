import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer(){
    return (
        <footer id="footer" class="footer md:py-32 py-12 px-6 text-white">
        <div class="footer_container container mx-auto flex-col md:flex-row text-left flex justify-between">
            <div className="mb-8">
                <h4 class=" font-bold text-2xl">FLICK</h4>
            </div>
            <div className="mb-8">
                <h4 class="foot_hds font-bold text-2xl">Main</h4>
            <ul class="name_add text-lg">
                <li><a href="about.html">Home page</a></li>
                <li><a href="about.html">Product page</a></li>
                <li><a href="about.html">Traveler page</a></li>
            </ul>
            </div>
            <div className="mb-8">
                <h4 class="foot_hds font-bold text-2xl">Product</h4>
            <ul class="abu text-lg">
                <li><a href="about.html">Our story</a></li>
                <li><a href="about.html">FAQs</a></li>
            </ul>
            </div>
            <div className="mb-8">
                <h4 class="foot_hds font-bold text-2xl">Contact us</h4>
            <ul class="cn_us">
                <li><a href="about.html"><FontAwesomeIcon icon={faPhoneAlt}/> &nbsp; +234 805 084 7102</a></li>
                <li><a href="about.html"><FontAwesomeIcon icon={faEnvelope}/> &nbsp;omobolaji.anuoluwapo@yahoo.com</a></li>
            </ul>
            </div>
            
        </div>
    </footer>
    );
}

export default Footer;