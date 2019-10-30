import React from 'react';
import { Link } from 'react-router-dom';

import '../Common.css';
import './Login.css';

class LoginHuman extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="FormLogin" className="FormHuman" id="container">
        <header>
          <img src="https://image.flaticon.com/icons/svg/1029/1029132.svg" alt="Lorem Ipsum" width="50px"/>
        </header>
        <form onSubmit={this.handleSubmit}>

          <label>User Name : 
            <input type="text" />
          </label>

          <label>Password : 
            <input type="text" />
          </label>

          <input className="button" type="submit" value="Envoyer" />
          
          <p className="TxtNewCount">Don't have an account <Link to="/">Sign Up!</Link></p>

        </form>
      </section>
    );
  }
}
export default LoginHuman;
