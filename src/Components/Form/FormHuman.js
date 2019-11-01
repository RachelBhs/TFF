import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import '../Common.css';
import './Form.css';

class FormHuman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: '',
      age: '',
      nationality: '',
      heavy: '',
      garlic: '',
      run: '',
      fight: '',
      fur: '',
      vhs: '',
      swim: '',
      ginger: '',
      dolls: '',
      ufo: '',
      laugh:'',
      userId: localStorage.getItem('id') || '1'
    };
  }

  handleChangeSex = (event) => {
    this.setState({sex: event.target.value});
  }

  handleChangeAge = (event) => {
    this.setState({age: event.target.value});
  }

  handleChangeNationality = (event) => {
    this.setState({nationality: event.target.value});
  }

  handleChangeHeavy = (event) => {
    this.setState({heavy: event.target.value});
  }

  handleChangeGarlic = (event) => {
    this.setState({garlic: event.target.value});
  }

  handleChangeRun = (event) => {
    this.setState({run: event.target.value});
  }

  handleChangeFight = (event) => {
    this.setState({fight: event.target.value});
  }

  handleChangeFur = (event) => {
    this.setState({fur: event.target.value});
  }

  handleChangeVHS = (event) => {
    this.setState({vhs: event.target.value});
  }

  handleChangeSwim = (event) => {
    this.setState({swim: event.target.value});
  }

  handleChangeGinger = (event) => {
    this.setState({ginger: event.target.value});
  }

  handleChangeDolls = (event) => {
    this.setState({dolls: event.target.value});
  }

  handleChangeUfo = (event) => {
    this.setState({ufo: event.target.value});
  }

  handleChangeLaugh = (event) => {
    this.setState({laugh: event.target.value});
  }

  handleSubmit = () => {
    console.log(this.state)
    let formdata = new FormData();
    formdata.append('sex', this.state.sex);
    formdata.append('age', this.state.age);
    formdata.append('nationality', this.state.nationality);
    formdata.append('heavy', this.state.heavy);
    formdata.append('garlic', this.state.garlic);
    formdata.append('run', this.state.run);
    formdata.append('fight', this.state.fight); 
    formdata.append('fur', this.state.fur);
    formdata.append('vhs', this.state.vhs);
    formdata.append('swim', this.state.swim);
    formdata.append('ginger', this.state.ginger);
    formdata.append('dolls', this.state.dolls);
    formdata.append('ufo', this.state.ufo);
    formdata.append('laugh', this.state.laugh);
    formdata.append('user_id', localStorage.getItem('id') );

    axios.post('http://192.168.184.249:8000/human/add', formdata)
    .then( (response) => {
      console.log("hey");
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
          <h2>Register Human</h2>
        </header>
          <label>Choose your Gender : 
            <select value={this.state.sex} onChange={this.handleChangeSex}>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
          </label>

          <label>Choose your Age : 
            <select value={this.state.age} onChange={this.handleChangeAge}>
              <option value="4">18-30</option>
              <option value="5">31-60</option>
              <option value="6">61</option>
            </select>
          </label>

          <label>Choose your Nationality : 
            <select value={this.state.nationality} onChange={this.handleChangeNationality}>
              <option value="7">Chinese</option>
              <option value="8">Italian</option>
              <option value="9">Thai</option>
              <option value="10">Mexican</option>
              <option value="11">Japanese</option>
              <option value="12">Other</option>
            </select>
          </label>

          <label>More than 75KG ? : 
            <select value={this.state.heavy} onChange={this.handleChangeHeavy}>
              <option value="13">Heavy</option>
              <option value="14">Not Heavy</option>
            </select>
          </label>

          <div className="formCheckbox">
            <p>Do you love Garlic ? </p>
            <div>
              <label>
                Yes <input type="checkbox" garlic={this.state.garlic} onChange={this.handleChangeGarlic} value="15" />
              </label>
              <label>
                No <input type="checkbox" garlic={this.state.garlic} onChange={this.handleChangeGarlic} value="16" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you like running ?</p>
            <div>
              <label>
                Yes <input type="checkbox" run={this.state.run} onChange={this.handleChangeRun} value="17" />
              </label>
              <label>
                No <input name="run" type="checkbox" run={this.state.run} onChange={this.handleChangeRun} value="18" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Martial arts ?</p>
            <div>
              <label>
                Yes <input type="checkbox" fight={this.state.fight} onChange={this.handleChangeFight} value="19" />
              </label>
              <label>
                No <input type="checkbox" fight={this.state.fight} onChange={this.handleChangeFight} value="20" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Are you allergic to dog's hairs ?</p>
            <div>
              <label>
                Yes <input type="checkbox" fur={this.state.fur} onChange={this.handleChangeFur} value="21" />
              </label>
              <label>
                No <input type="checkbox" fur={this.state.fur} onChange={this.handleChangeFur} value="22" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>EDo you have a VHS player ?</p>
            <div>
              <label>
                Yes <input type="checkbox" vhs={this.state.vhs} onChange={this.handleChangeVHS} value="23" />
              </label>
              <label>
                No <input type="checkbox" vhs={this.state.vhs} onChange={this.handleChangeVHS} value="24" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you know how to swim ?</p>
            <div>
              <label>
                Yes <input type="checkbox" swim={this.state.swim} onChange={this.handleChangeSwim} value="25" />
              </label>
              <label>
                No <input type="checkbox" swim={this.state.swim} onChange={this.handleChangeSwim} value="26" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Are you a ginger ?</p>
            <div>
              <label>
                Yes <input type="checkbox" ginger={this.state.ginger} onChange={this.handleChangeGinger} value="27" />
              </label>
              <label>
                No <input type="checkbox" ginger={this.state.ginger} onChange={this.handleChangeGinger} value="28" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you play with dolls ?</p>
            <div>
              <label>
                Yes <input type="checkbox" dolls={this.state.dolls} onChange={this.handleChangeDolls} value="29" />
              </label>
              <label>
                No <input type="checkbox" dolls={this.state.dolls} onChange={this.handleChangeDolls} value="30" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you believe in UFOs ?</p>
            <div>
              <label>
                Yes <input type="checkbox" dolls={this.state.dolls} onChange={this.handleChangeUfo} value="31" />
              </label>
              <label>
                No <input type="checkbox" dolls={this.state.dolls} onChange={this.handleChangeUfo} value="32" />
              </label>
            </div>
          </div>

          <div className="formCheckbox">
            <p>Do you like to laugh ?</p>
            <div>
              <label>
                Yes <input type="checkbox" laugh={this.state.laugh} onChange={this.handleChangeLaugh} value="33" />
              </label>
              <label>
                No <input type="checkbox" laugh={this.state.laugh} onChange={this.handleChangeLaugh} value="34" />
              </label>
            </div>
          </div>

        <Link to={`/swipe/${this.state.userId}`}><input className="button" type="submit" value="Envoyer" onClick={this.handleSubmit}/></Link>

      </section>
    );
  }
}

export default FormHuman;