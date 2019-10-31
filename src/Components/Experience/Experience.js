import React from 'react';

import '../Common.css';
import './Experience.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="ExperiencePage" id="container">
          <div className="CtnImageExperience">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Castelul_Bran2.jpg" />
          </div>
					<div className="CtnTxtExperience">
						<h4>Lorem Ipsum dolor</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
					</div>
      </section>
    );
  }
}

export default Experience;
