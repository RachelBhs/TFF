import React from 'react';
import { Link } from 'react-router-dom';

import '../Common.css';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="FormLogin" id="container">
        <header>
          <img src={"https://image.flaticon.com/icons/svg/2170/2170147.svg"} />
          <h2>Login</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <input type="text" />
          <input className="button" type="submit" value="Envoyer" />
          <p className="TxtNewCount">Don't have an account <Link to="/">Sign Up!</Link></p>
        </form>
      </section>
    );
  }
}
export default Login;
