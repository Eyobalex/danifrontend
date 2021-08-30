import React , {useEffect, useState}from 'react'
import {  Button } from '@material-ui/core';
import {Link, Route, useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../actions/users';
import User from './Users/User';
export default function Index() {

    const [page, setPage ] = useState('users');

    const dispatch = useDispatch();



    
    let response = null;
    useEffect( () => {
        dispatch(getUsers());

        if (page === 'index') {
            response = <h2>Home Page</h2>;
        }else if (page === 'users') {
            response = < User users= {users} />;
        }else{
            response = <h1>Noting to show</h1>
        }

        console.log(response);
        
      }, [dispatch, page])
    

      
  const users = useSelector( (state) =>{
    console.log("app:",state);
    return state.users;
  })
    return (
        <div>
            Admin Home Page

            
            <ul>
                
                <li>
          <span className="border-left pl-xl-4"> <Button  onClick={ () => setPage('users')} variant="contained" color="primary">users</Button></span>
          </li>
                <li>
          <span className="border-left pl-xl-4"> <Button  onClick={() => setPage('listings')}  variant="contained" color="primary">listings</Button></span>
          </li>
            </ul>


        {response}
        
        </div>
    )
}
