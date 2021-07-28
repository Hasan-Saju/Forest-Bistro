import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  // get all the state of reducer here
  // console.log("map state to props: ", state);
  return {
    dishes: state.dishes, //will get dishes as props in Home
    sample: state.sample,
  };
};

class Home extends Component {
  componentDidMount() {
    // console.log("Home State: ", this.state);
    console.log("Home Props: ", this.props);
    this.props.dispatch({
      type: "TEST",
      str: "Bangladesh",
    });
  }

  componentDidUpdate() {
    console.log("Home Props Update: ", this.props);
  }
  render() {
    document.title = "Forest Bistro";
    return <div></div>;
  }
}

export default connect(mapStateToProps)(Home);
