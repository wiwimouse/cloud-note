import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from './action'
import { Link } from 'react-router-dom';
import Panel from 'react-bootstrap/lib/Panel';

const NoteCard = ({ slug, body, updatedAt }) => (
  <Link
    to={`/${slug}`}
    className="text-black hover:text-black hover:no-underline"
  >
    <Panel>
      <Panel.Body>
        <h3 className="truncate">{body}</h3>
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
          {
            this.props.notes.map(o => (
              <div
                key={o.note.slug}
                className="col-xs-12 col-md-6"
              >
                <NoteCard {...o.note} />
              </div>
            ))
          }
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
