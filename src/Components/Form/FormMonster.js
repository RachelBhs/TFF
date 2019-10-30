import React from 'react';

import '../Common.css';
import './Form.css';

class FormMonster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section className="FormInscription" id="container">
        <header>
          <h2>Register</h2>
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
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option selected value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
          </label>

          <div class="checkbox">
            <div>
              <input type="checkbox" />
              <label>Oui</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Non</label>
            </div>
          </div>

          <input className="button" type="submit" value="Envoyer" />

        </form>
      </section>
    );
  }
}
export default FormMonster;
