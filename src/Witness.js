import React from 'react'
import { FormGroup, FormControl, ControlLabel, Form, Col, Tooltip } from 'react-bootstrap';
import './Witness.css';

class Witness extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("_____");
    fetch('https://desolate-anchorage-86223.herokuapp.com/witness/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: this.locationInput.value, 
        description: this.textInput.value
      })
    }).then(function() {
      console.log("ok");
    }).catch(function() {
      console.log("Erro with posting data");
    })
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin widths">
        <h1>What happened</h1>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel></ControlLabel>
          <FormControl 
            componentClass="textarea" 
            placeholder="What happened?"
            inputRef={input => this.textInput = input}
          />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          bsSize="sm"
        >
          {/* <ControlLabel>Location of the event</ControlLabel> */}
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Where?"
            inputRef={input => this.locationInput = input}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>
          <Col >
            <button className="btn btn-lg btn-primary btn-block" type="submit">Send alert</button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Witness;
