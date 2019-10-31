import React from 'react';
import axios from 'axios';


const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "100%",
  height: "250px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0
};

const Card = ({ zIndex = 0, children }) => (
	<div style={{ ...cardStyles, zIndex }}>
		{children}
	</div>
);

class CardSwipe extends React.Component{
  constructor() {
    super();

    this.state = {
      quote: null,
      character:  null,
      image:  null,
    }
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  fetchJoke = () => {
    axios.post('192.168.184.30:8000/')
    .then((result) => {
      this.setState({
        quote: result.data[0].quote,
        character: result.data[0].character,
        image: result.data[0].image,
      })
    })

		    axios.post('192.168.184.30:8000/', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
  }

  render () {
    return (
      <div className="container">
        <div className="ctn_api">

          <div className="ctn_character_picture">
            <img src={this.state.image} alt={this.state.character}/>
          </div>

          <div className="ctn_quote">
            <p className="txt_name">{this.state.character}</p>
            <p className="txt_quote">{this.state.quote}</p>
          </div>

        </div>
        <p className="btn" onClick={this.fetchJoke}>+</p>
      </div>
    )
  }
}

export default CardSwipe;


  