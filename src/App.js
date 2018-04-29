import React, { Component } from 'react';
import Header from './components/header/Header.js';
import SelectOption from './components/SelectOption/SelectOption.js';
import { BrowserRouter, Route } from "react-router-dom";
import PostPics from './components/PostPics/PostPics.js';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
	      <BrowserRouter>
	      <div>
	        <Route path="/" exact component={SelectOption} />
	        <Route path="/cardDetail" component={PostPics} />
	      </div>
	    </BrowserRouter>
      </div>
    );
  }
}

export default App;
