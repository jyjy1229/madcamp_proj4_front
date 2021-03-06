import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import styles from './Home.css';
import Login from '../Login/Login';
import 'react-bootstrap/Navbar';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/Navbar'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import MatchList from '../../components/MatchList';
import { selectToken, selectUser_id } from '../../redux/user/selector';
import { useDispatch, useSelector } from 'react-redux';
import { SetCoin } from '../../redux/user/action';
import { BorderColor, BorderColorOutlined, BorderStyle } from '@material-ui/icons';
import imgA from '../../components/material/image_1606922434772.gif';
import imgB from '../../components/material/image_1608796118742.gif';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 300,
        marginLeft: 100,
        marginRight: 50,
        marginTop: 50,
        backgroundColor: '#212529',
        color: 'white'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: 'white'
    },
    pos: {
        marginBottom: 12,
        color: 'white'
    },
});

const matchStyles = makeStyles({
    root: {
        paddingLeft: 0,
        minWidth: 275,
        maxWidth: 800,
        marginLeft: 50,
        marginright: 50,
        marginTop: 50,
        maxHeight: 700,
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: '#212529',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ffffff',
            outline: '0px solid slategrey',
        },
        backgroundColor: '#00000000',
        color: 'white'


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Home = (props) => {
    //const [items, setItems] = useState([]);

    const [matches, setMatches] = useState([]);
    const [user, setUser] = useState({});
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const matchclasses = matchStyles();
    const token = useSelector(state => {
        return selectToken(state);
    });

    const user_id = useSelector(state => {
        return selectUser_id(state);
    });

    const dispatch = useDispatch();
    //const location = useLocation();

    useEffect(() => {
        console.log(matches);
    }, [matches])

    useEffect(() => {
        console.log(user);
    }, [user])

    console.log(token);
    useEffect(() => {

        axios.get('http://192.249.18.232:8080/user/check', {
                headers: {
                'x-access-token': token
                }
            })
            .then((res) => {
                console.log(res.data.message);
                if(res.data.message == "error") props.history.push('/')
            })

        axios.get('http://192.249.18.232:8080/match')
            .then((res) => {
                console.log("---------------");
                console.log(res);
                console.log("---------------");
                
                setMatches(res.data);

                axios.post('http://192.249.18.232:8080/user/finduser', {
                        user_id:user_id
                    }).then((res)=>{
                        console.log(res);
                        let new_coin = res.data.coin;
                        dispatch(SetCoin({coin:new_coin}));
                    })
            });
        
    
        console.log('Get matches.');
    }, []);


    return (
        <div>
            <Navbar/>
            <div className="row">
                {/* 광고 */}
                <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50'}}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            광고
                        </Typography>
                        <Typography variant="h6" component="h2">
                            카뱅 333312-34-56789
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            입금시 광고 가능
                        </Typography>
                        <Typography variant="body2" component="p">
                            안전한 놀이터
                        <br />
                            {'"We are wating for you."'}
                        </Typography>
                        
                    </CardContent>
                    <div className='row align-items-center'>
                        <img src={ imgA} width='275'/>
                    </div>
                    <div className='row align-items-center' style={{marginTop: 5}}>
                        <img src={ imgB} width='275'/>
                    </div>  
                </Card>

                {/* Match */}
                <ul className="list-group list-group-flush" className={matchclasses.root} style={{padding: 0, border: 'solid', borderColor: '#4CAF50' }}> 
                    <MatchList matches={matches}/>
                </ul>

                {/* 광고 */}
                <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50'}}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            광고
                        </Typography>
                        <Typography variant="h5" component="h2">
                            현민이 컴퓨터
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            중학생한테
                        </Typography>
                        <Typography variant="body2" component="p">
                            털렸쥬?
                        <br />
                            {'"We are wating for you."'}
                        </Typography>


                    </CardContent>
                    <div className='row align-items-center'>
                        <img src={ imgA} width='275'/>
                    </div>
                    <div className='row align-items-center' style={{marginTop: 5}}>
                        <img src={ imgB} width='275'/>
                    </div>                    
                </Card>
            </div>
        </div>
    )
}

export default Home;