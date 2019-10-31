import React from 'react';
import axios from 'axios';

import '../Common.css';
import './Form.css';

class FormHuman extends React.Component {
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
          <h2>Register</h2>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>Choose your Gender : 
            <select value={this.state.gender} onChange={this.handleChangeGender}>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
          </label>

          <label>Choose your Age : 
            <select value={this.state.gender} onChange={this.handleChangeGender}>
              <option value="4">18-30</option>
              <option value="5">31-60</option>
              <option value="6">61</option>
            </select>
          </label>

          <label>Choose your Nationality : 
            <select value={this.state.gender} onChange={this.handleChangeGender}>
              <option value="7">Chinese</option>
              <option value="8">Italian</option>
              <option value="9">Thai</option>
              <option value="10">Mexican</option>
              <option value="11">Japanese</option>
              <option value="12">Other</option>
            </select>
          </label>

          <label>Choose your ?? : 
            <select value={this.state.gender} onChange={this.handleChangeGender}>
              <option value="13">Heavy</option>
              <option value="14">Not Heavy</option>
            </select>
          </label>

          <div className="formCheckbox">
            <p>Do you love Garlic ? </p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="15" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="16" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Est tu adeptes de la course à pieds ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="17" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="18" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Fait tu des arts martiaux ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="19" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="20" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Est tu allergique aux poils ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="21" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="22" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Est tu équipé en VHS ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="23" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="24" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you like Swim ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="25" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="26" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Are you a Ginge Person ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="27" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="28" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you play with dolls ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="29" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="30" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you believe UFO ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="31" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="32" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you like laugh ?</p>
            <div>
              <label>
                Yes <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="33" />
              </label>
              <label>
                No <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} value="34" />
              </label>
            </div>
          </div>
        </form>

        <input className="button" type="submit" value="Envoyer" onClick='console.log("Lololo")'/>

      </section>
    );
  }
}

export default FormHuman;