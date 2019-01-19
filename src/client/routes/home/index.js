import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from './action'
import { Link } from 'react-router-dom';
import Panel from 'react-bootstrap/lib/Panel';

const NoteCard = ({ slug, body, updatedAt }) => (
  <Link to={`/${slug}`}>
    <Panel>
      <Panel.Body>
        <p>{body}</p>
        <p className="mt-2 text-grey-darkest">
          <span className="glyphicon glyphicon-time" />
          <span className="ml-2">{new Date(updatedAt).toLocaleString()}</span>
        </p>
      </Panel.Body>
    </Panel>
  </Link>
);

class Home extends Component {
  static propTypes = {
    notes: PropTypes.array,
    getNotes: PropTypes.func
  }

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            {this.props.notes.map(o => <NoteCard key={o.note.slug} {...o.note} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    notes: state.home.notes,
  }),
  { getNotes },
)(Home);
