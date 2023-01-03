import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return(
        <>
            <header>
                <Link to="/" className="logo">AjayKhatri</Link>           
                <ul>
                    <li>
                        <Link to ="#" className="active">Home</Link>
                    </li>
                    <li>
                        <Link to ="#">About</Link>
                    </li>
                    <li>
                        <Link to ="#">Work</Link>
                    </li>
                    <li>
                        <Link to ="#">COntact</Link>
                    </li>
                </ul>
            </header>
        </>
    )
};

export default Menubar;