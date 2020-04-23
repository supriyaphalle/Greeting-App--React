
// import React, { Component } from 'react';
// import User from "./components/User"

// //import './App.css';
  
// export default class App extends Component{

//   constructor(){
//     super();
//     this.postID =0;
//     this.Body ="";
    
//     this.state = {
//         postArray : [], 
//         fname : '',    
//         lname : ''  
//     }
//   }
 
// deleteEvent = (index) => {
//     const copyPostArray = Object.assign([], this.state.postArray);
//     copyPostArray.splice(index ,1);
//     this.setState({
//         postArray : copyPostArray,
//         fname : "",
//         lname : ""
//     })
// }

// setPost = ( element ) => {
//     //this.Body =  { "Hello " : element.target.value }
//     this.setState({
//       [element.target.name] :element.target.value
//     });
 
//   }
   
// addPost = () => {
//   this.postID = this.postID+1;
//   var hello = "Hello  ";
//   this.Body = hello.concat(this.state.fname).concat(" ").concat(this.state.lname);
//   const copyPostArray = Object.assign([],this.state.postArray)
//   copyPostArray.push({
//     id : this.postID,
//     body : this.Body
//   })
//   this.setState({
//     postArray :copyPostArray
//   })
// }

// cancleSave = () => {
//   this.setState({
//     fname : "",
//     lname : ""
//   })
// }

// render(){
//  return(
//   <div className = "input-box" >
         
//    <input type = "text" 
//       placeholder = "First Name"
//        name="fname"
//       value = {this.state.fname}
//       onChange={this.setPost}
//   />
//    <input type = "text" 
//      placeholder = "Last Name"
//       name="lname"
//       value = {this.state.lname}
//       onChange={this.setPost}
//   />
          
//   <button onClick={this.addPost}>ADD</button> 
//   <button onclick={this.canclePost}>Cancle</button>
//    <ul>
//    {
//      this.state.postArray.map((user, index) => {
//        return(
//         <User
//            key = {user.id}
//            id={user.id}
//            body={user.body}
//            delete={this.deleteEvent.bind(this,index)}
//         />     
//       )
//     })
//     }
//     </ul>
//   </div>
//   )
// }


// }

//  // export default App;




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { Component } from 'react';
import User from "./components/User"

//import './App.css';
  
export default class App extends Component{

  constructor(){
    super();
    this.postID =0;
    this.Body ="";
    
    this.state = {
        postArray : [], 
        fname : '',    
        lname : ''  
    }
  }
 
deleteEvent = (index) => {
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.splice(index ,1);
    this.setState({
        postArray : copyPostArray,
        fname : "",
        lname : ""
    })
}

setPost = ( element ) => {
    //this.Body =  { "Hello " : element.target.value }
    this.setState({
      [element.target.name] :element.target.value
    });
 
  }
   
addPost = () => {
  this.postID = this.postID+1;
  var hello = "Hello  ";
  this.Body = hello.concat(this.state.fname).concat(" ").concat(this.state.lname);
  const copyPostArray = Object.assign([],this.state.postArray)
  copyPostArray.push({
    id : this.postID,
    body : this.Body
  })
  this.setState({
    postArray :copyPostArray
  })
}

cancleSave = () => {
  this.setState({
    fname : "",
    lname : ""
  })
}

tableData() {
  return this.state.postArray.map((greetings, index)=>{
    const {id , body } = greetings
    return(
        <tr key ={id}>
          <td>{id}</td>
          <td>{body}</td>
        </tr>
    )
 })
}

render(){
 return(
  <div className = "input-box" >
         
   <input type = "text" 
      placeholder = "First Name"
       name="fname"
      value = {this.state.fname}
      onChange={this.setPost}
    />
   <input type = "text" 
     placeholder = "Last Name"
      name="lname"
      value = {this.state.lname}
      onChange={this.setPost}
    />
          
   <button onClick={this.addPost}>ADD</button> 
   <button onclick={this.canclePost}>Cancle</button> 
    <table id = 'postArray'>
      <tbody>
        {this.tableData()}
      </tbody>

    </table>

  </div>

  )
}



}

 // export default App;






