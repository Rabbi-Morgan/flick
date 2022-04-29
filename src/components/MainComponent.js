import React, {Component} from "react";
import EasyDelivery from "./EasyDeliveryComponent";
import HeroHeader from "./HeaderComponent";
import Navbar from "./NavbarComponent";
class Main extends Component {
    render(){
        return (
            <>
            <Navbar/>
            <HeroHeader/>
            <EasyDelivery/>
            </>
        )
    }
}
export default Main;