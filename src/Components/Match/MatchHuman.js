import React from 'react';

import '../Common.css';
import './Match.css';

class MatchMonster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="Match" id="container">
        <header>
          <img src={"https://image.flaticon.com/icons/svg/761/761505.svg"} />
          <h2>You Win</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </header>
      </section>
    );
  }
}
export default MatchMonster;