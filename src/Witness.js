import React from 'react'
import { FormGroup, FormControl, ControlLabel, Form, Col } from 'react-bootstrap';
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
        location: "2 MetroTech Center, Brooklyn, NY 11201", 
        description: "An I.C.E. agent has been spotted"
    })
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin widths">
        <h1>Witness Form</h1>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel></ControlLabel>
          <FormControl componentClass="textarea" placeholder="Describe the situation" />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          bsSize="sm"
        >
          <ControlLabel>Location of the event</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Location"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>
          <Col >
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit Witness</button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Witness;
