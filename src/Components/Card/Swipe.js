import React, { Component } from "react";
import { render } from "react-dom";

import Swipeable from "react-swipy";

import Card from "./Card";
import Button from "./Button";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "100%", height: "250px" };
const wrapperCardStyles = { position: "relative", width: "80%", height: "250px", margin: "0 auto"};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class Swipe extends Component {
  state = {
    cards: ["First", "Second", "Third"]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div style={appStyles} id="Container">
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperCardStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>Reject</Button>
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
        </div>
      </div>
    );
  }
}
export default Swipe;