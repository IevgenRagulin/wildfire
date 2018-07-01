import React from 'react'
import { FormGroup, FormControl, ControlLabel, Form, Col } from 'react-bootstrap';
import './Witness.css';

class Subscribe extends React.Component {
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
    // fetch('https://desolate-anchorage-86223.herokuapp.com/witness/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     location: this.locationInput.value, 
    //     description: this.textInput.value
    // })
    // });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin widths">
        <h1>Subscribe</h1>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Recieve alerts from around the area</ControlLabel>
          <FormControl 
            componentClass="textarea" 
            placeholder="###-###-###"
            inputRef={input => this.phoneinput = input}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Col >
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit Witness</button>
          </Col>
        </FormGroup>
        <FormGroup>
        <ControlLabel>Phone Number</ControlLabel>
        <MaskedFormControl type='text' name='phoneNumber' mask='111-111-1111' />
      </FormGroup>

      </Form>
    );
  }
}

export default Subscribe;
