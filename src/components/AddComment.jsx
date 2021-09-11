import { Component } from "react";
import { Form, Button, Spinner} from "react-bootstrap";
import {withRouter} from 'react-router-dom'


class AddComment extends Component {
  state = {
    body: {
      comment: "",
      rate: 1,
      elementId: this.props.selectedMovie.imdbID,
    },
    isLoading: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Comments added successfully')
    this.setState({
      isLoading: true
  })

    setTimeout(() => {
      this.props.history.push('/')
  }, 2000)
  
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.body),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMyODZiYTJjMzgzNjAwMTU4NWE3MTgiLCJpYXQiOjE2MzA3MDEyNDMsImV4cCI6MTYzMTkxMDg0M30.4no578CvSqcpn4tFJIiKRdSs0C2awl8cutLVaCS9azo"
        },
      });
    } catch (error) {}
  };
  render() {
    return (
      <>
        <h5>Add new comment</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Your comment:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.body.comment}
              onChange={(e) => {
                this.setState({
                  body: {
                    ...this.state.body,
                    comment: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="rate">
            <Form.Label>Your rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.body.rate}
              onChange={(e) => {
                this.setState({
                  body: {
                    ...this.state.body,
                    rate: e.target.value,
                  },
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
          {this.state.isLoading && <Spinner animation="border" variant="light" style={{ width: '20px', height: '20px',marginRight:'5px'}} />}
            Add comment
            
          </Button>
        </Form>
      </>
    );
  }
}

export default withRouter(AddComment);
