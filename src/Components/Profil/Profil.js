import React from 'react';
import { Link } from 'react-router-dom';

import '../Common.css';
import './Profil.css';

class Profil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="ProfilPage" id="container">
        <div className="ProfilAvatar">
          <img src={"https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/09/gettyimages-8018860920-h_2017.jpg"} />
        </div>
        <div className="ProfilTxt">
          <h3>Pennywise</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
        <div className="ProfilPreference">
          <h4>Préférences</h4>
          <div>
            <p>Lorem</p>
            <p>Dolor</p>
            <p>Sit Amet</p>
            <p>Lorem</p>
            <p>Dolor</p>
            <p>Sit Amet</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Profil;
