import React, { Component } from "react";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import TextView from "./components/text-view";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <TextView />
      </ReduxProvider>
    );
  }
}

export default App;
