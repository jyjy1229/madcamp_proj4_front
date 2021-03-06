import React from 'react';
import {Route, Link} from 'react-router-dom';
import 'react-bootstrap/Navbar';
import {Nav, NavItem, NavDropdown, Button} from 'react-bootstrap';
import { Logout } from '../redux/user/action';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
const useStyles = makeStyles((theme) => ({
    dividerColor: {
        backgroundColor: '#4CAF50',
    },
}));

function Navbar(){
    const dispatch = useDispatch();

    async function LogoutRequest(e) {
        console.log('The link was clicked');
        dispatch(Logout({token:'init'}));
        //props.history.push('/');
    }

    const classes = useStyles();

    return(
        <div>       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand" >
                        <h2 style={{ color: 'white' , marginLeft: '10px'}}> ToToNoNo</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/totoking' className="nav-link">금주의 토토왕</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/rank' className="nav-link">기록/순위</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/factcheck' className="nav-link">당신이 이 사이트에서 한 짓</Link>
                            </li>
                            <NavDropdown title="My" id="basic-nav-dropdown">
                                <NavDropdown.Item eventKey="My page">
                                    <Link to='/mypage' className="nav-link">My Page</Link>
                                </NavDropdown.Item>
                                
                                <NavDropdown.Item eventKey="LogOut">
                                    <Link to='/' className="nav-link" onClick={LogoutRequest}>LogOut</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </ul>
                    </div>
                </div>
            </nav> 
            <Divider classes={{root: classes.dividerColor}}/> 
            <Divider classes={{root: classes.dividerColor}}/>
            <Divider classes={{root: classes.dividerColor}}/>
            <Divider classes={{root: classes.dividerColor}}/> 
        </div>
    )
}


export default Navbar;