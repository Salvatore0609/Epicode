import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNThmZGI3NDcwMTAwMTU4YjJhZWQiLCJpYXQiOjE3Mzg4NTAxMTgsImV4cCI6MTc0MDA1OTcxOH0.8b4QOmLZsljzz3_qfjPqEuneu0N5k_0RSCtlJRh1tHk";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    hasError: false,
    errorMessage: "",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(API_URL + this.props.bookId, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      if (!response.ok) throw new Error("Errore nel caricamento dei commenti");
      const data = await response.json();
      this.setState({ comments: data, isLoading: false });
    } catch (err) {
      this.setState({ hasError: true, errorMessage: err.message, isLoading: false });
    }
  };

  render() {
    return (
      <div className="mt-3">
        {!this.props.bookId ? (
          <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
        ) : (
          <>
            {this.state.isLoading && <Spinner animation="border" />}
            {this.state.hasError && <Alert variant="danger">{this.state.errorMessage}</Alert>}
            <CommentList comments={this.state.comments} />
            <AddComment bookId={this.props.bookId} />
          </>
        )}
      </div>
    );
  }
}

export default CommentArea;
