import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../Common.css';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.id = JSON.parse(localStorage.getItem('id')) || [];
    this.gender = JSON.parse(localStorage.getItem('gender')) || [];
    this.state = {
      username: '',
      pass: '',
      gender: '',
      id: null
    }
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
    console.log(this.state);
    let formdata = new FormData();
    formdata.append('username', this.state.username);
    formdata.append('pass', this.state.pass);

    axios.post('http://192.168.184.249:8000/user/logIn', formdata)
    .then( (response) => {
      console.log(response)
      this.setState({
        gender: response.data.type_id,
        id: response.data.id
      })
      localStorage.setItem('gender', response.data.type_id);
      localStorage.setItem('id', response.data.id);
    })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  componentDidMount = () => {
    console.log(this.test)
    console.log(this.test2)
  }

  render() {
    return (
      <section className="FormLogin" id="container">
        <header>
          <img src={"https://image.flaticon.com/icons/svg/2170/2170147.svg"} />
          <h2>Login</h2>
        </header>
          <input type="text" username={this.state.username} onChange={this.handleChangeUsername} />
          <input type="text" pass={this.state.pass} onChange={this.handleChangePass}/>
          <input className="button" type="submit" value="Envoyer" onClick={this.handleSubmit} />
          <p className="TxtNewCount">Don't have an account <Link to="/form">Sign Up!</Link></p>
          {this.state.id &&
           this.state.gender == '1' && <Redirect to="/card" />
           }
          {this.state.id &&
            this.state.gender >= "2" && <Redirect to="/matchmonster"/>
          }
      </section>
    );
  }
}
export default Login;
