import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';
 export default function(){
    return(
        <div className="header_container">
            <Logo/>
            <h1>SHELFIE</h1>
            <Link to='/form'>
                <button>create</button>
            </Link>
            <Link to='/'>
                <button>dashboard</button>
            </Link>
        </div>

    )
}