import React from 'react';

import '../Common.css';
import './Match.css';

class MatchHuman extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="Match" id="container">
        <div className="CloseBtn">
					<img src={"https://image.flaticon.com/icons/svg/1632/1632708.svg"} />
        </div>
        <header>
            <img src={"https://image.flaticon.com/icons/svg/761/761505.svg"} />
          <h2>You Win</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </header>
      </section>
    );
  }
}
export default MatchHuman;
