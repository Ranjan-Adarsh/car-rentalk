import React, {Component} from 'react';
import SearchBar from './Search';
import {Route,Link,Routes} from 'react-router-dom' 
class UserDetails extends Component
{
    
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            city:'',
            mobileNo:'',
            email:'',
        };
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleEmail = this.handleEmail.bind(this);

    }
    
    handleFirstName(event) {
        this.setState({firstName: event.target.value});
        //console.log(firstName);
        //event.preventDefault();
      }
      handleLastName(event) {
        this.setState({lastName: event.target.value});
        //event.preventDefault();
      }
      handleCity(event) {
        this.setState({city: event.target.value});
        //event.preventDefault();
      }
      handleMobile(event) {
        this.setState({mobileNo: event.target.value});
        //event.preventDefault();
      }
      handleEmail(event) {
        this.setState({email: event.target.value});
        //event.preventDefault();
      }
    
      saveStateToLocalStorage = () => { 
          var obj= {"firstName": this.state.firstName,"lastName":this.state.lastName}
        localStorage.setItem('stateUserDetails', JSON.stringify(obj)); 
        //event.preventDefault();
      } 
      
      // Fetch data from local storage 
      getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('stateUserDetails'); 
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
          <form onSubmit={this.saveStateToLocalStorage}>
            <label>
              First Name:
              <input type="text" value={this.state.firstName} onChange={this.handleFirstName} />
            </label>
            <label>
              Last Name:
              <input type="text" value={this.state.lastName} onChange={this.handleLastName} />
            </label>
            <label>
              City:
              <input type="text" value={this.state.city} onChange={this.handleCity} />
            </label>
            <label>
              Email:
              <input type="text" value={this.state.mobileNo} onChange={this.handleMobile} />
            </label>
            <label>
              Mobile No:
              <input type="text" value={this.state.email} onChange={this.handleEmail} />
            </label>
            <Link to="/Search">
            <button type="submit">SignUp</button>
            </Link>
            <Routes>
            <Route path='/Search' element={<SearchBar/>}></Route>
            </Routes>
          </form>
         
        );
      }
}
export default UserDetails;