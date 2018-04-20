import React, { Component } from 'react';
import Header from './components/header/Header.js';
import SelectOption from './components/SelectOption/SelectOption.js';
import ViewCard from './components/ViewCards/ViewCards.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SelectOption />
        {/*<ViewCard />*/}
      </div>
    );
  }
}

export default App;
