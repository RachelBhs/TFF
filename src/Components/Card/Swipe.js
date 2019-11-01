import React from 'react';
import axios from 'axios';
import ReactSwipe from 'react-swipe';
import { useParams } from 'react-router-dom';

import './Swipe.css'
import { isTemplateElement } from '@babel/types';
let reactSwipeEl;

class CardSwipe extends React.Component{

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      exps: [],
      userId: props.match.params.id
    }
  }

  componentDidMount = () => {
    this.fetchSwipe();
  }

  fetchSwipe = () => {

    console.log(this.state)

    let formdata = new FormData();
    formdata.append("user_id", this.state.userId );

    axios.post('http://192.168.184.249:8000/human/view', formdata)
    .then((response) => {
      console.log(response)
      this.setState ({
        exps: response.data || []
      })
    })
  }

  render () {
    return (
      <React.Fragment>
        <ReactSwipe className="carousel" className="container" swipeOptions={{ continuous: true }} ref={el => (reactSwipeEl = el)}>
          {this.state.exps.map(item => {
          return   (    
            <div className="item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            )
          })
          }
        </ReactSwipe>
        <div className="CtnBtnSwipe">
          <button onClick={() => reactSwipeEl.next()}>Next</button>
          <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        </div>
      </React.Fragment>
    )
  }
}

export default CardSwipe;