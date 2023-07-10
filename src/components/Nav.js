import './nav.css';
import Drawer from './Drawer';
import React, {useState, useEffect} from 'react';

const Nav = ({setCategory}) => {
    return(
        <div className="nav">
            <div className="drawer">
                <Drawer setCategory={setCategory}/>
                
            </div>
            <div  className="center">
            <img 
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
            style={{width: "130px", height: "65px"}}
            >
            </img>
            </div>
        </div>
    )
}

export default Nav;