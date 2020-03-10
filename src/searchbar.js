import React,{useEffect,useState} from 'react';
import './searchbar.css';
import Middle from './middle'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Navbar from "./Navbar"

const Request_url="https://www.googleapis.com/books/v1/volumes?q="
const API_KEY="AIzaSyDqSnkp9dsosqFUND4ubfG6M5E28f6ZZ9c";
const Searchbar=({user})=>{
    const [field,setField]=useState(false);
    const[value,setValue]=useState('');
    const[books,setBooks]=useState(null);
    //here we are trying to call api when the value in the input is submitted
    useEffect(() => {
      if(field===true && value!='')
      {
        fetch(Request_url+value.replace(" ", "+")+"&maxResults=40&key="+API_KEY)
        .then((response)=>response.json())
        .then(({items})=>{setBooks({items})                    
      })
       setField(false)
       
      }     
        //here you have to use two dependecy for calling func inside useEffect
    }, [value,field]);
     
   return (
     <div>
     <Navbar user={user}/>
       <div className="searchbar">
       <div className="container">
       <h1 id="search">Book Search Using React</h1>
       <div className="search">
       <input type="text" onKeyUp={(event)=>event.keyCode===13?setField(true):setField(false)}placeholder="search..." value={value} onBlur={(event)=>setValue(event.target.value)} onChange={(event)=>setValue(event.target.value)}/>
          <button onClick={()=>setField(true)}><FontAwesomeIcon style={{width:20}} icon={faSearch}/></button> 
           </div>
        </div>
         </div>
         {
           console.log(books)
         }
         <Middle user={user} books={books}/>
         </div>
         );
}
export default Searchbar;
    // "Project 1064662071584 is not found and cannot be used for API calls. If it is recently created, enable Books API by 
      // visiting https://console.developers.google.com/apis/api/books.googleapis.com/overview?project=1064662071584 then retry. 
      // If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."