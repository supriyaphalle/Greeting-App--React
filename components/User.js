import React ,{ Component } from 'react';

export default class User extends Component{
render(){
return(
    <div>
        <li>
         id= {this.props.id}
         {this .props.body}
         <button onClick ={this.props.delete}>Delete</button>
         <hr/>
         </li>
    </div>

)
}
}
// export default user;