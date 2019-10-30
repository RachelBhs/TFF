import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Common.css';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleChangePass = (event) => {
    this.setState({
      pass: event.target.value
    });
  }

  handleSubmit = () => {
    let formdata = new FormData();
    formdata.append('username', this.state.username);
    formdata.append('pass', this.state.pass);

    console.log("erere")
    axios.post('http://192.168.184.30:8000/user/logIn', formdata)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <section className="FormLogin" className="FormHuman" id="container">
        <header>
          <img src="https://image.flaticon.com/icons/svg/1029/1029132.svg" alt="Lorem Ipsum" width="50px"/>
        </header>
        <form>

          <label>UserName : 
            <input type="text" username={this.state.username} onChange={this.handleChangeUsername}  />
          </label>

          <label>Password : 
            <input type="text" pass={this.state.pass} onChange={this.handleChangePass} />
          </label>

          <input className="button" type="submit" value="Envoyer" onClick={this.handleSubmit} />
          
          <p className="TxtNewCount">Don't have an account <Link to="/">Sign Up!</Link></p>

        </form>
      </section>
    );
  }
}
export default Login;
