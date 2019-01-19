import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Panel>
              <Panel.Body>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur perspiciatis nemo, eos magnam sunt quas, exercitationem ratione iusto architecto enim adipisci neque beatae rem voluptatum ea minima. Ipsum, mollitia.</p>
                <p className="mt-2 text-grey-darkest">
                  <span className="glyphicon glyphicon-time" />
                  <span className="ml-2">{new Date().toLocaleString()}</span>
                </p>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}
