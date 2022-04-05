// // import './App.css';
// import { Component } from 'react';
// import SearchBar from './Search.js'
// import UserDetails from './userDetails.js';
// //import SBar from './Search';

// class App extends Component() {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }
//   render()
//   {
//   return (
//     <div className="App">      
//     < UserDetails/>
//     </div>
//   );
// }
// }
// export default App;

import { Component, useState } from 'react';
import SearchBar from './Search.js'
import UserDetails from './userDetails.js';
import LogIn from './logIn.js';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  //const [pin,setPin]=useState('')
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/logIn/">
              <button type="button">Log In</button>
            </Link>
            <Link to="/userDetails/">
            <button type="button">Sign Up</button>
            </Link>
          </ul>
          </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        {/* <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/users' element={<Users/>} /> */}
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/logIn/*' element={<LogIn/>}></Route>
        <Route path='/userDetails/*' element={<UserDetails/>}/>
        <Route path='/Search/*' element={<SearchBar/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



