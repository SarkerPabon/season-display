import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My Component ws redered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

export default App;
