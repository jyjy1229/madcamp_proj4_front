import React from 'react';
import {Route, Link} from 'react-router-dom';
import 'react-bootstrap/Navbar';

const Navbar = () => {
    return(
        <div>       
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand" >ToToNoNo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/totoking' className="nav-link">금주의 토토왕</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/aipick' className="nav-link">동현이 픽 받기</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/rank' className="nav-link">기록/순위</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/factcheck' className="nav-link">당신이 이 사이트에서 한 짓</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">My page or logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>        
        </div>
    )
}


export default Navbar;