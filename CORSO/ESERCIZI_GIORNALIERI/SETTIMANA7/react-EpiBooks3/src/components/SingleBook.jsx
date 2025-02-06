import { Badge, Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelection = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { img, title, category, price } = this.props;

    return (
      <Card
        className={`col-sm-6 col-md-4 col-lg-3 my-3 mx-2 p-0 ${this.state.selected ? "border-2 border-danger" : ""}`}
        style={{ width: "18rem", cursor: "pointer" }}
        onClick={this.toggleSelection}
      >
        <Card.Img variant="top" src={img} style={{ objectFit: "cover", minHeight: "430px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Badge>{price}€</Badge>
        </Card.Body>
        <CommentArea />
      </Card>
    );
  }
}

export default SingleBook;
