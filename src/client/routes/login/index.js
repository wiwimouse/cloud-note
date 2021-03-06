import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

import history from '../../history'
import { login, register } from '../../actions/user';

class Login extends Component {
  static propTypes = {
    login: propTypes.func,
    register: propTypes.func
  }

  state = {
    username: '',
    password: '',
  }

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.login({
        username: this.state.username,
        password: this.state.password
      })

      history.push('/')
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Grid>
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="username">
            <Col componentClass={ControlLabel} sm={2}>Username</Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="Username"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} sm={2}>Password</Col>
            <Col sm={10}>
              <FormControl
                type="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle="success">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}

export default connect(
  null,
  { login, register }
)(Login);
