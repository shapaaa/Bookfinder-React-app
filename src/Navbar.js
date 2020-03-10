import React,{useState,useEffect} from 'react';
import './Navbar.css';
import CurrentUser from './CurrentUser';
// import history from './history';
// import { useHistory } from 'react-router-dom';
import {auth,googleAuthProvider} from './firebase';
// import {Link,navigate} from "@reach/router";
// import Store from './Store';
// import {Route,Router,Switch} from 'react-router-dom';
class Navbar extends React.Component{
   constructor(props)
   {
       super(props)
   }
   pageChange=()=>{
    //   navigate('/Store');
   }
     render()
     {
         const {user}=this.props;
        return(
            <div className="Nav"> 
                  {!user && (
                      <button className="auth"  onClick={()=>auth.signInWithPopup(googleAuthProvider)}>LOGIN</button>
                  )}                   
                  {
                      user && (
                      <div className="SignIn">                        
                      <button onClick={this.pageChange}  className="store">Store</button> 
                      <button className="auth" onClick={()=>auth.signOut()}>LOGOUT</button>
                      
                      </div>
                  )               
                  }
                  
            </div>
        )
     }
        
 
}
export default Navbar;
