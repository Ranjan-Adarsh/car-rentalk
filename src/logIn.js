// import React, {Component} from 'react';
// import SearchBar from './Search';
// import {Route,Link,Routes} from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

// class LogIn extends Component{

//     constructor(){
//         super();
//         this.state={
//             fullName: '',
//             email:''
//         }
//         this.handleFullName = this.handleFullName.bind(this);
//         this.handleEmail = this.handleEmail.bind(this);
//     }
//     handleFullName(event) {
//         this.setState({fullName: event.target.value});
//         //console.log(firstName);
//         //event.preventDefault();
//       }
//       handleEmail(event) {
//         this.setState({email: event.target.value});
//         //console.log(firstName);
//         //event.preventDefault();
//       }

//       render(){
//           return(
//             <form onSubmit={this.saveStateToLocalStorage}>
//             <label>
//               Full Name:
//               <input type="text" value={this.state.firstName} onChange={this.handleFullName} />
//             </label>
//             <label>
//             Email:
//             <input type="text" value={this.state.email} onChange={this.handleEmail} />
//           </label>
//           <Link to="/Search">
//             <button type="submit" color='red'>LogIn</button>
//             </Link>
//             <Routes>
//             <Route path='/Search' element={<SearchBar/>}></Route>
//             </Routes>
//           </form>
//           )
//           }
// }
// export default LogIn;
import React, {Component,useState} from 'react';
import SearchBar from './Search';
import {Route,Link,Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
export default function LogIn (props){
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');

    const navigate=useNavigate();

 function handleClick(e)
  {
      navigate('/Search');
  }

      return(
        <form >
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={event=>setFullName(event.target.value)} />
        </label>
        <label>
        Email:
        <input type="text" value={email} onChange={event=>setEmail(event.target.value)} />
      </label>
        <button type="submit" onClick={handleClick}>LogIn</button>
      </form>
      );
}