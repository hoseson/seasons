import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), //this is the success callback
      (err) => console.log(err) //this is the failure callback
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
