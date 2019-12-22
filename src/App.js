import React from 'react';
import Card from './Component/Card/card.js';
import {Cardlist} from './Component/Cardlist/cardlist.js';
import './App.css';


  
class App extends React.Component {
  constructor(){
    super()
    this.state={users:[],searchfield:""}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respose=>respose.json())
      .then(data=>this.setState({users:data}));


  }
  render()
  {
    const filteredRobot=this.state.users.filter(searchfield=>searchfield.name.toLowerCase().includes(this.state.searchfield));
  
    
    
  return (
    <div className="App">
    <h1 id="header">ROBO FRIENDS</h1>
      <input type="text" placeholder=" Search Robots" onChange={(e)=>this.setState({searchfield:e.target.value})}/>
      
      <Cardlist users={filteredRobot}>
       </Cardlist>
      </div>
  );
}
}


export default App;
