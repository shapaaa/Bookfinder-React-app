import React from 'react';
import './Result.css';
import {database} from './firebase';
class Book extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
          save:true
      }
      this.usersRef=database.ref('/users')
    }
    handleOnSave=()=>{
      const {user,id,title}=this.props;  
      this.setState({save:false})
      this.usersRef.child(user.uid).child('books').child(id).set(title);
    }
    handleOnRemove=()=>{
        const {user,id}=this.props; 
        this.setState({save:true})
        this.usersRef.child(user.uid).child('books').child(id).remove();
    }
    render()
    {
        const {save}=this.state;
        const{user}=this.props;
        return(
            <>
            {            
               user && 
                <div>
                {save?            
                (<button onClick={this.handleOnSave} className="save">Save</button>)
                :
                (<button onClick={this.handleOnRemove} className="remove">Remove</button>)
                }
                </div>           
            }  
            </>
        )
    }

}
export default Book;
 