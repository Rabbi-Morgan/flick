import React, {Component} from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass, faAngleDown,  faTimes, faBars} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle, faQuestionCircle} from '@fortawesome/free-regular-svg-icons';

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state ={
            isNavOpen: false,
            isAccountOpen: false,
            isHelpOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        let timesTog = this.state.isNavOpen ?'block':'hidden';
        let hamTog = this.state.isNavOpen ?'hidden':'block';
        let rightBar = 'rightBar py-4 md:py-0 bg-white w-full h-screen md:h-auto md:w-auto flex-col md:block justify-center absolute top-16 right-0 md:relative md:top-0 md:right-0 md:translate-x-0 md:opacity-100';
        let trans = this.state.isNavOpen?` translate-x-0 opacity-100 ${rightBar}`:` -translate-x-full opacity-50 ${rightBar}`;
    return (
        <div className='text-gray-800 bg-white z-50 navGangan fixed items-center shadow-md top-0 left-0 flex justify-between w-full px-6 mx-auto py-4'>
            <div className='md:hidden toggleBtn text-2xl'><button onClick={this.toggleNav}><FontAwesomeIcon className={hamTog} icon={faBars}/><FontAwesomeIcon className={timesTog} icon={faTimes}/></button></div>
            <div className='logo font-extrabold text-3xl sm:text-4xl'>FLICK</div>
            <div className='searchAndButton hidden md:flex'>
                <div className='inputCont relative'>
                    <label className='absolute top-1/2 -translate-y-1/2 left-4' htmlFor='search'><FontAwesomeIcon className='text-blue-900' icon={faMagnifyingGlass}/></label>
                    <input className='border-blue-800 rounded-md py-2 pl-14 px-4' type='text' id='search' name='search' placeholder='Search for your product'/>
                </div>
                <div className='but ml-4'><input type='submit'  className='hover:opacity-95 cursor-pointer shadow-lg font-semibold py-2 px-6 rounded-md' id='searchButton' name='searchButton' value='Search'/></div>
            </div>
            <div  className = {trans}>
                <div className='mobileSearchCont relative md:hidden mb-4 w-11/12 mx-auto '>
                    <label className='absolute top-1/2 p-4 -translate-y-1/2 right-0' htmlFor='mobileSearch'><FontAwesomeIcon className='text-blue-900' icon={faMagnifyingGlass}/></label>
                    <input className='py-2 px-4 w-full rounded-md' type='text' id='mobileSearch' name='mobileSearch' placeholder='Search for your product'/>
                </div>
                <ul className='md:flex md:flex-row flex-col'>
                <li className='taskbars my-8 py-2 md:my-0 md:py-0 account flex ml-8 cursor-pointer'><FontAwesomeIcon icon={faUserCircle}/><p className='ml-2'>ACCOUNT <FontAwesomeIcon icon={faAngleDown}/></p></li>
                <li className='taskbars my-8 py-2 md:my-0 md:py-0 help flex ml-8 cursor-pointer'><FontAwesomeIcon icon={faQuestionCircle}/><p className='ml-2'>HELP <FontAwesomeIcon icon={faAngleDown}/></p></li>
                <li className=' taskbars my-8 py-2 md:py-0 md:my-0 cart flex ml-8 cursor-pointer'><FontAwesomeIcon icon={faCartShopping}/><p className='ml-2'>TRADE WITH US</p></li>
                </ul>
            </div>
            <div className='md:hidden text-xs account cursor-pointer'><FontAwesomeIcon icon={faUserCircle}/><span className='ml-2'>LOG IN <FontAwesomeIcon icon={faAngleDown}/></span></div>
        </div>
    );
    }
}
export default Navbar;
