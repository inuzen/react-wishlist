import React from 'react';
import PropTypes from 'prop-types';

import './frow.css';
import './App.css';
import './dropdown.css';
import './range-style.css';
import Items from './components/items/Items';
import Header from './components/layout/Header';
const App = () => {

  return (
    <div>
      <Header/>
        <Items/>
      </div>
  )
}

App.propTypes = {

};

export default App;
