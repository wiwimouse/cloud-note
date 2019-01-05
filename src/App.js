import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

class App extends Component {
  state = {
    text: ''
  }

  onChange = (value) => this.setState({ text: value });

  render() {
    return (
      <div className="App">
        <ReactQuill value={this.state.text} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
