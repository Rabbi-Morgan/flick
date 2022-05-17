import React,{Component} from "react";


class HeroHeader extends Component{
    
    render(){
        return(
            <div className="headerCont text-gray-800 z-10 w-full overflow-hidden h-screen">
                <div className="heroContainer w-full h-full flex justify-center md:grid md:grid-cols-12 items-center md:gap-20 px-8">
                    <div className="heroText flex-col justify-between  md:col-span-7 text-left">
                        <div className="upperText mb-4">
                            <h1 className="bigText text-5xl md:text-7xl font-extrabold">Great Deals,<br/>Safe Deliveries</h1>
                        </div>
                        <div className="lowerText">
                            <h6 className="text-lg md:text-2xl mb-4">Deal with us for the best prices and send goods to anyone, anywhere with ease.</h6>
                        </div>
                        <div className="buttons flex justify-between">
                            <button className="border-solid border-2 font-bold rounded-r-full rounded-l-full heroBtnn px-8 py-2">Trade</button>
                            <button className="border-solid font-bold border-2 rounded-r-full rounded-l-full heroBtn px-4 py-2"><a href='https://greencode12.github.io/'>Traveler</a></button>
                        </div>
                    </div>
                    <div className="hidden md:col-span-5 md:block heroImg">
                            <img className="w-full" src={window.location.origin + '/assets/images/imagegirl.png'} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeroHeader
