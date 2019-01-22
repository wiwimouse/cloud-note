import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import Delta from 'quill-delta';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { note as apiNote } from '../../api'

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

  createNote = (body) => {
    return apiNote.createNote(body);
  }

  updateNote = (body) => {
    return apiNote.updateNote(this.props.slug, body);
  }

  deleteNote = () => {
    return apiNote.deleteNote(this.props.slug);
  }

  constructor(props) {
    super(props);
    if (!props.slug) this.state.mode = 'EDIT';
  };

  async componentDidMount() {
    if (this.state.mode === 'READ') {
      try {
        const note = await apiNote.getNote(this.props.slug);
        this.setState({ body: new Delta(JSON.parse(note.body)) })
      } catch (err) {
        console.error(err);
      }
    }
  }

  onChange = (val) => {
    this.setState({ body: val });
  };

  onSave = async () => {
    try {
      if (this.props.slug) {
        await this.updateNote(this.deltaJsonString);
      } else {
        const note = await this.createNote(this.deltaJsonString);
        history.replace(`/${note.slug}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  onDelete = async () => {
    try {
      await this.deleteNote();
      history.replace('/');
    } catch (err) {
      console.error(err);
    }
  }

  get delta () {
    return this.state.quillRef.current.getEditor().getContents();
  }

  get deltaJsonString () {
    return JSON.stringify(this.delta.ops);
  }

  render() {
    return (
      <div>
        <ReactQuill
          ref={this.state.quillRef}
          value={this.state.body}
          onChange={this.onChange}
        />
        <Button bsStyle="success" onClick={this.onSave}>save</Button>
        <Button bsStyle="danger" onClick={this.onDelete}>delete</Button>
      </div>
    )
  };
}
