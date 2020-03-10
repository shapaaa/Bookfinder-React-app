import React,{useEffect,useState} from 'react';
import {auth,database} from './firebase';
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Store from './Store';
import './App.css';
import history from './history';
import pick from 'lodash/pick';
import Searchbar from './searchbar';
import Middle from './middle';
import Footer from './footer';
// import Routes from './Routes';

function App() {
  const [user,setUser]=useState(null);
  const[books,setBooks]=useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{

      setUser(user);
      if(user)
      {
        database.ref('/users').child(user.uid);
        database.ref('/users').once('value',(snapshot)=>{
        if(snapshot.val())
        {
          return;
        }
        database.ref('/users').child(user.uid).set(pick(user,['displayName']))
      }
      )
      }      
    })
  })
   


  return (  
    <div className="App">
    <Searchbar user={user}/>
    <Footer/>
    {/* <Router>
    <Route path='/Store' component={Store}/>
    </Router> */}
       </div>    
  );
}

export default App;
