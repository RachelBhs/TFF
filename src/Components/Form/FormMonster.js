import React from 'react';

import axios from 'axios';

import '../Common.css';
import './Form.css';

class FormMonster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post('192.168.184.30:8000/', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <section className="FormInscription" id="container">
        <header>
          <h2>Register Monster</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </header>
        <form onSubmit={this.handleSubmit}>

          <label>Name : 
            <input type="text" />
          </label>

          <label>LastName : 
            <input type="text" />
          </label>

          <label>Adress : 
            <input type="text" />
          </label>

          <label>Lorem ipsum dolor : 
            <select>
              <option name="human">human</option>
              <option name="vampire">vampire</option>
              <option name="werewolf">werewolf</option>
              <option name="zombie">zombie</option>
              <option name="ghost">ghost</option>
              <option name="serial_killer">serial_killer</option>
              <option name="demon">demon</option>
              <option name="aquatic_monster">aquatic_monster</option>
              <option name="alien">alieb</option>
              <option name="clown">clown</option>
              <option name="possessed_doll">possessed_doll</option>
            </select>
          </label>

          <input className="button" type="submit" value="Envoyer" onClick='console.log("Lololo")'/>
          
        </form>
      </section>
    );
  }
}
export default FormMonster;
