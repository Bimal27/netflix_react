import { Component } from "react";


class DisplayComments extends Component {
  state = {
    comments: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selectedMovie,
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMyODZiYTJjMzgzNjAwMTU4NWE3MTgiLCJpYXQiOjE2MzA3MDEyNDMsImV4cCI6MTYzMTkxMDg0M30.4no578CvSqcpn4tFJIiKRdSs0C2awl8cutLVaCS9azo"
          },
        }
      );
      const data = await response.json();
      this.setState({
        comments: data,
      });
    } catch {}
  }

  render() {
    return (
      <>
        <h5>Comments:</h5>
        <ul>
          {this.state.comments.map((c) => (
            <li>
              {c.comment}
              <i>
                (Rate: {c.rate} / Date: {c.createdAt})
              </i>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default DisplayComments;
