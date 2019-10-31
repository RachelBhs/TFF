// import React from "react";
// import axios from 'axios';

// const cardStyles = {
//   background: "whitesmoke",
//   borderRadius: 3,
//   width: "100%",
//   height: "250px",
//   cursor: "pointer",
//   userSelect: "none",
//   position: "absolute",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   top: 0
// };

// // const CardSwipe = ({ zIndex = 0, children }) => (
// //   <div style={{ ...cardStyles, zIndex }}>{children}</div>
// // );

// class CardSwipe extends React.Component{
//   constructor() {
//     super();
//     this.state = {
//       title: "Loading",
//       description: "Loading",
//       img: "Loading",
//     }
//   }

//   componentDidMount = () => {
//     this.fetchJoke();
//   }

//   fetchJoke = () => {
//     axios('http://192.168.184.38:8000/human/viewAll/1')
//     .then((response) => {
//       console.log(response)
//       this.setState({
//         title: response.data[0].title,
//       })
//     })
//   }

//   render () {
//     return (
//       <div style={{ ...cardStyles }}>
//         <img src={this.state.image} alt={this.state.image} />
//         <p>{this.state.title}</p>
//       </div>
//     )
//   }
// }

export default CardSwipe;
