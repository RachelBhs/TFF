import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import '../Common.css';
import './Form.css';

class FormMonster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      image: ''
    };
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  handleChangeImage = (event) => {
    this.setState({
      image: event.target.value
    });
  }

  handleSubmit = () => {
    console.log(this.state);
    let formdata = new FormData();
    formdata.append('name', this.state.name);
    formdata.append('description', this.state.description);
    formdata.append('image', this.state.image);
    formdata.append('user_id', JSON.parse(localStorage.getItem('id')) );

    axios.post('http://192.168.184.249:8000/human/add', formdata)
    .then( (response) => {
      console.log(response);
      // this.setState({
      //   // error: response.request.responseText
      // });
    })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <section className="FormInscription" id="container">
        <header>
          <h2>Register Monster</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </header>

          <label>Name : 
            <input type="text" name={this.state.name} onChange={this.handleChangeName}/>
          </label>

          <label>Description : 
            <input type="text" description={this.state.description} onChange={this.handleChangeDescription}/>
          </label>

          <label>Image : 
            <input type="text" image={this.state.image} onChange={this.handleChangeImage}/>
          </label>

          <Link to='/matchmonster'><input className="button" type="submit" value="Envoyer" onClick={this.handleSubmit}/> </Link>

      </section>
    );
  }
}
export default FormMonster;
