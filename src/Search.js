// App.js
import React, {Component} from 'react';
import CarCardComponent from './CarCards';
import {Route,Link,Routes} from 'react-router-dom' ;

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      type:'',
      fuel:'',
      seats:'',
      transmission:'',
    };
  }

  handleCity = (e) => {
   
    var index = e.nativeEvent.target.selectedIndex;
    var text =e.nativeEvent.target[index].text;
    console.log(text);
    this.setState({type:e.target.value});
    
  };
  
  handleFuel = (e) => {
   
    var index = e.nativeEvent.target.selectedIndex;
    var text =e.nativeEvent.target[index].text;
    console.log(text);
    this.setState({fuel:e.target.value});
    
  };
  handleTransmission = (e) => {
   
    var index = e.nativeEvent.target.selectedIndex;
    var text =e.nativeEvent.target[index].text;
    console.log(text);
    this.setState({transmission:e.target.value});
    
  };
  handleSeats = (e) => {
   
    var index = e.nativeEvent.target.selectedIndex;
    var text =e.nativeEvent.target[index].text;
    console.log(text);
    this.setState({seats:e.target.value});
    
  };

  handleButtonClick = () => { 
    localStorage.setItem('state1', JSON.stringify(this.state
      ));

     
  } 
  
  // Fetch data from local storage 
  getStateFromLocalStorage = () => { 
    let data = localStorage.getItem('state1'); 
    if(data !== undefined) { 
      this.setState(JSON.parse(data)); 
    } 
  } 
  
  componentDidMount() { 
    // Fetch data from local storage 
    this.getStateFromLocalStorage(); 
  }

  render() {
    return (
      <div>
        <select value={this.state.type}  onChange={this.handleCity} >
                    <option value='1'>Lucknow</option>
                    <option value='2'>Mumbai</option>
        </select>
        <select value={this.state.fuel}  onChange={this.handleFuel} >
                    <option value='1'>Petrol</option>
                    <option value='2'>Diesel</option>
        </select>
        <select value={this.state.transmission}  onChange={this.handleTransmission} >
                    <option value='1'>Auto</option>
                    <option value='2'>Manual</option>
        </select>
        <select value={this.state.seats}  onChange={this.handleSeats} >
                    <option value='1'>4</option>
                    <option value='2'>6</option>
                    <option value='3'>8</option>
        </select>
        <Link to='/CarCards'>
        <button onClick = {this.handleButtonClick}>Get Car data</button>
        </Link>
        <Routes>
            <Route path='/CarCards' element={<CarCardComponent/>}></Route>
            </Routes>
      </div>
    );
  }
}