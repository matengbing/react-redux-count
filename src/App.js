import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addNum,desNum,asyncAddNum} from './reducers/Counter';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>{this.props.num}</h1>
        <button onClick={this.props.addNum}>+</button>
        <button onClick={this.props.desNum}>-</button>
        <button onClick={this.props.asyncAddNum}>异步+</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    let {counter}=state;
    return {
        num: counter.num
    }
}
const mapDisptchToProps={addNum,desNum,asyncAddNum}
App=connect(mapStateToProps,mapDisptchToProps)(App);
export default App;
