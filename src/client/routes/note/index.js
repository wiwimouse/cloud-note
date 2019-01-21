import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';

export default class Note extends Component {
  static propTypes = {
    slug: PropTypes.string,
  };

  static defaultProps = {
    slug: ''
  };

  state = {
    mode: 'READ',
    body: '',
    quillRef: React.createRef()
  };

  onChange = (val) => {
    this.setState({ body: val });
  };

  onSave = () => {
    const delta = this.state.quillRef.current.getEditor().getContents();
    const jsonString = JSON.stringify(delta.ops);
  }

  constructor(props) {
    super(props);

    if (!props.slug) this.state.mode = 'EDIT';
  };

  render() {
    return (
      <div>
        <ReactQuill
          ref={this.state.quillRef}
          value={this.state.body}
          onChange={this.onChange}
        />
        <Button bsStyle="success" onClick={this.onSave}>save</Button>
      </div>
    )
  };
}
