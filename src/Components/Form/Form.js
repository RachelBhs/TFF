import React from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
import '../Common.css';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.id = JSON.parse(localStorage.getItem('id')) || [];
    this.state = {
      username: '',
      pass: '',
      gender: '',
      error: null
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

  handleChangeGender= (event) =>{
    this.setState({
      gender: event.target.value
    });
  } 

  handleSubmit = () => {
    console.log(this.state);
    let formdata = new FormData();
    formdata.append('username', this.state.username);
    formdata.append('pass', this.state.pass);
    formdata.append('gender', this.state.gender);

    axios.post('http://192.168.184.249:8000/user/signIn', formdata)
    .then( (response) => {
      console.log(response);
      this.setState({
        error: response.request.responseText,
        id: response.data.id
      })
      localStorage.setItem('id', response.data.id)
    })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <section className="FormInscription" id="container">
        <header>
          <h2>Register</h2>

        </header>
          <label>Username : 
            <input type="text" username={this.state.username} onChange={this.handleChangeUsername} />
          </label>

          <label>Password : 
            <input type="text" pass={this.state.pass} onChange={this.handleChangePass}/>
          </label>

          <label>Choose your gender : 
            <select value={this.state.gender} onChange={this.handleChangeGender}>
              <option value="1">human</option>
              <option value="2">vampire</option>
              <option value="3">werewolf</option>
              <option value="4">zombie</option>
              <option value="5">ghost</option>
              <option value="6">serial_killer</option>
              <option value="7">demon</option>
              <option value="8">aquatic_monster</option>
              <option value="9">alien</option>
              <option value="10">clown</option>
              <option value="11">possessed_doll</option>
            </select>
          </label>

          <input className="button" type="submit" value="Envoyer" onClick={this.handleSubmit} />
          
          {this.state.error && 
            this.state.gender == "1" && <Redirect to='/formhuman'></Redirect> 
          }
          {this.state.error &&
            this.state.gender >= "2" && <Redirect to='/formmonster'></Redirect>
          }
      </section>
    );
  }
}
export default Form;
