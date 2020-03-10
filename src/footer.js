import React from 'react';
import './footer.css';
import {navigate} from "@reach/router";
const Footer=(props)=>{
   return(
       <div className="footer">
       <h2 id="footer">Created By: Shardul Pathak</h2>
        <div>
          <h3>Tools Used</h3>
          <article className="footer-art">
        
            <section onClick={()=>navigate('https://reactjs.org/docs/hooks-effect.html')} className="footer-sec">                
                    <img src="data:image/jpeg;base64,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" alt="React"/>                
            </section>
            <section onClick={()=>navigate('https://developers.google.com/books')} className="footer-sec" id="api">
              Google Books Api
            </section>
            <section>
              <img src="" alt=""/>
            </section>
            </article>
        </div>
       </div>
   );
}
export default Footer;