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
          <img src="https://image.flaticon.com/icons/svg/1029/1029132.svg" alt="Lorem Ipsum" width="50px"/>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value="UserName"/>
          <input type="text" value="Password"/>
          <input className="button" type="submit" value="Envoyer" />
          <p className="TxtNewCount">Don't have an account <Link to="/">Sign Up!</Link></p>
        </form>
      </section>
    );
  }
}
export default Login;