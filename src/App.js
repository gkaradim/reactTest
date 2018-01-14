import React, { Component } from "react";
import "./App.css";

import Head from "./components/Head";
import Main from "./components/Main";


class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="bg">
	        <Head />

	        <Main />
        </div>
      </div>
    );
  }
}

export default App;
