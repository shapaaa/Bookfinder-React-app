import React from 'react';
import {database} from './firebase';


class Store extends React.Component{ 
    constructor(props)
    {
        super(props)
        this.usersRef=database.ref("/users");        
    }


  render()
  {
      return(
          <div>
         {this.usersRef.on('value',(snapshot)=>{
              console.log(JSON.stringify(snapshot.val()))
          })}
          </div>         
      )

  }
}
export default Store;