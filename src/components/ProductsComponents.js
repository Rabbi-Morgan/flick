import React from "react";

function Products(){
    return(
        <div className="prdtCnt px-6 pt-8 pb-12 bg-blue-50 slCont">
            <div className="prdtHedCont py-2 md:py-8 text-left">
                <h1 className="bgPrdtHed mb-4 font-bold text-3xl md:text-6xl">Browse products by category</h1>
                <p className="smPrdtP text-bg md:text-2xl">What are you looking to buy? <span>Browse products</span></p>
            </div>
            <div className="prdtGrd gap-10 grid grid-auto-row">
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/phones.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Phones</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/drinks.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Drinks</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/laptops.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Laptops</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/furnitures.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Furnitures</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/cloths.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Cloths</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/cars.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Cars</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 hover:scale-105 transition-all overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/books.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Books</p>
                </div>
                <div className="grdCont rounded-lg cursor-pointer bg-white hover:bg-blue-100 overflow-hidden">
                    <div className="grdCntImg h-3/4 overflow-hidden"><img className="w-full object-cover grdImg" src={window.location.origin + '/assets/images/accessories.jpg'} alt=""/></div>
                    <p className="grdCntP mt-6 font-bold">Accessories</p>
                </div>
            </div>
        </div>
    );
}
export default Products;