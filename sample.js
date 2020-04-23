import React, { Component } from 'react';




export default App extends Component{
state = {
    
    postArray : [
            
                {id : 1, body :"hellow supriya"},
                {id : 2, body :"hellow Abhi"},

    ]

}

deleteEvent = (index) =>{
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.slice(index ,1);
    this.setState({
        postArray : copyPostArray
    })

}

 
render(){
    return(
        <div>
            <ul>
                {
                        this.state.postArray.map((user, index) => {
                            return(
                                <user
                                    key = {user.id}
                                    id={user.id}
                                    body={user.body}
                                    delete={this.deleteEvent.bind(this,index)}
                                />
                            
                           )
                        })

                }
            </ul>
        </div>
    )

}


}





































