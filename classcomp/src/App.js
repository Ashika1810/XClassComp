import logo from './logo.svg';
import './App.css';
import React from 'react';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
    
  increment(){
    this.setState(prevValue =>({
      count: prevValue.count + 1,
    }))
  }

  decrement(){
    this.setState(prevValue =>({
      count: prevValue.count - 1,
    }))
  }


  render(){
    return(
      <div>
          <div className="counter">
          <h1>Counter App</h1>
          <p>Count:{" "}{this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>

    )
  }
}

