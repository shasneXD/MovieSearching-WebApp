import React, {Component} from 'react';
import Navigationbar from './Components/Navbar';
import MainPage from './Components/MainPage'
import store from './store.js'
import { Provider } from "react-redux";


class App extends Component{
  render()
  {
      return ( 
      <Provider store={store}>
        <Navigationbar />
        <MainPage />
      </Provider>
      );
  }
}

export default App;
