import React from 'react'
import { FormGroup, FormControl, ControlLabel, Form, Col, Modal, Button } from 'react-bootstrap';
import './SignUp.css';

class SignUP extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      value: '',
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("Not connected to DB yet");
    // fetch('https://desolate-anchorage-86223.herokuapp.com/witness/', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     location: "2 MetroTech Center, Brooklyn, NY 11201", 
    //     description: "An I.C.E. agent has been spotted"
    // })
    // });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 9 && length < 12) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'Phone number must include at least 10 digits';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin widths">
        <h1>Sign Up</h1>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
          bsSize="large"
        >
          <ControlLabel></ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Please enter your phone number"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Col >
            <button 
            className="btn btn-lg btn-primary btn-block" 
            onClick={() => this.setState({ show: true })}
            type="submit"> Create Account</button>
          </Col>
          <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Success!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You should recieve a four digit code by text. You are also subscribed to the locations that you typed in.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        </FormGroup>
      </Form>
    );
  }
}

export default SignUP;
