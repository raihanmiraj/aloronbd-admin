import React, {Component} from "react";

class App extends Component{
  state = {
    variable:"Ahnaf Tahmid",
  }

inputFieldHandler = (e) =>{
this.setState({variable: e.target.value})
}


render(){
  return (<>
  <div style={{"border":"1px solid black"}}>
  <input type="text" onChange={this.inputFieldHandler} />
  <br/>
  <h1>{this.state.variable}</h1>
  <h1>{this.props.user}</h1></div>
  </>
  )
}

}

export default App;