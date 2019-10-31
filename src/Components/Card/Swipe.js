import React from 'react';
import axios from 'axios';
import ReactSwipe from 'react-swipe';

import './Swipe.css'
let reactSwipeEl;

class CardSwipe extends React.Component{

  constructor() {
    super();
    this.state = {
      title: "Loading",
      description: "Loading",
      img: "Loading"
    }
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  fetchJoke = () => {
    axios('http://192.168.184.249:8000/human/viewAll')
    .then((response) => {
      console.log(response)
      this.setState({
        title: response.data[1].title,
        description: response.data[1].description,
        img: response.data[1].img
      })
    })
  }

  render () {
    return (
      <React.Fragment>
        <ReactSwipe
          className="carousel" className="container"
          swipeOptions={{ continuous: true }}
          ref={el => (reactSwipeEl = el)}
        >
          <div className="item">
            <img src={this.state.img} />
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
          </div>

          <div className="item">
            <img src={this.state.img} />
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
          </div>
        </ReactSwipe>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
      </React.Fragment>
    )
  }
}

export default CardSwipe;