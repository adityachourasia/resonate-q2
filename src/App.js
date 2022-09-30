import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Users from "./components/users"





class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     usersInfo: []
  //   }
  // }
  
  state = {  } 

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res => res.json())
  //   .then(data=>{
  //     this.setState({  usersInfo : data})
  //     console.log("From App",data)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Users usersInfo={this.state.usersInfo}></Users>
      </div>
    );
  }


}
 
export default App;