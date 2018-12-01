import React, {Component} from 'react';
import Logo from '../Logo.png';
import './logo.css'
export default function(){
    return(
        <div className='logo_container' >
            <img id="logo" src={Logo} />
        </div>


    )
}