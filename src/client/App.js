import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/home';
import Note from './routes/note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/:slug" component={Note}/>
      </div>
    );
  }
}

export default App;
