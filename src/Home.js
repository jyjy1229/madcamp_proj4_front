import React from 'react';
import {Route, Link} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

const Home = () => {
    return(
        <div>       
            <h2>this is Home</h2>
            <ul>
                <li>
                    <Link to='/login'>Login 클릭</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup 클릭</Link>
                </li>
            </ul>

            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
        </div>
    )
}

export default Home;