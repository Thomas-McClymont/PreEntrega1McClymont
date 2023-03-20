import React, { Component } from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header 
          title="Hello World!" 
          subtitle="Hola Mundo!"
        />
        {/* <Header title="Soy otro titulo"/> */}
      </div>
    );
  }
}

export default App;