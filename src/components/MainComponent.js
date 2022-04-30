import React, {Component} from "react";
import EasyDelivery from "./EasyDeliveryComponent";
import Footer from "./FooterComponent";
import HeroHeader from "./HeaderComponent";
import Navbar from "./NavbarComponent";
import Products from "./ProductsComponents";
import Trust from "./TrustComponent";
class Main extends Component {
    render(){
        return (
            <>
            <Navbar/>
            <HeroHeader/>
            <Products/>
            <EasyDelivery/>
            <Trust/>
            <Footer/>
            </>
        )
    }
}
export default Main;