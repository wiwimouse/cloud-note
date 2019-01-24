import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../routes/home';
import Note from '../routes/note';
import Login from '../routes/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/new" component={Note} />
          <Route path="/:slug" render={props => <Note slug={props.match.params.slug} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
