import React from 'react';
import book from  './book.svg';
import Result from './Result';
import './middle.css';
const Middle=({user,books})=>{    
    return(
   books==null?
   <div className="middle">
   <img className="book" src={book} alt="book"/>
   <h1 id="middle">Search Whatever Books You Love Reading</h1>
   </div>
    :
    <article className="main-article">
    {books.items.map(({volumeInfo,id})=>        
<Result key={id} user={user} id={id} title={volumeInfo.title} description={volumeInfo.description} url={volumeInfo.imageLinks} 
authors={volumeInfo.authors} preview={volumeInfo.previewLink} info={volumeInfo.infoLink} />
          )}
    </article>
         
    )
  }
export default Middle;
