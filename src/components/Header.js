import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import './Header.css'
 export default function(){
    return(
        <div className="header_container">
           <div className='logo_container'>
                <Logo
                className="logo"
                />
           </div>

            <h3 className='shelfie' >SHELFIE</h3>

            <div className='header_buttons' >
                <Link to='/'>
                    <button className='head_buttons'>dashboard</button>
                </Link>
                <Link to='/form'>
                    <button className='head_buttons' >Add Inventory</button>
                </Link>
            </div>


        </div>

    )
}