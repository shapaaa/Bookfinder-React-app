import React,{useState,useEffect} from 'react';
import './Result.css';
import {navigate} from '@reach/router';
import Book from './Book';

const Result=(props)=>{
//  const auth=props.authors;
// const [save,setSave]=useState(true);
  return(
    <div className="Result-div">
     <section className="Result">
       <img className="book-img" src={props.url.smallThumbnail} alt="books"/>
        <div className="Result-fig">
          <figcaption onClick={()=>navigate(props.preview)}>
              Preview
          </figcaption> 
          <figcaption onClick={()=>navigate(props.info)}>
              Details
          </figcaption>
          </div>
          <br/>           
           <Book id={props.id} title={props.title} user={props.user}/> 
     </section>
     </div>
  )
}
export default Result;
