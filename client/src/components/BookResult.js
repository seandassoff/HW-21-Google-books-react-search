import React from "react";
import API from "../utils/API";
import { BrowserRouter as Router } from "react-router-dom";

class BookResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      deleted: false
    };
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleSaveClick = function(e) {
    this.setState({ saved: true });
    const bookData = {
      title: this.props.title,
      authors: this.props.authors,
      link: this.props.link,
      img: this.props.img,
      description: this.props.description
    };
    e.preventDefault();
    API.addBookToDB(bookData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDeleteClick(e) {
    this.setState({ deleted: true });
    e.preventDefault();
    API.deleteBook(this.props.id)
      .then(response => {
        console.log(response);
        Router.dispatch(this.props.location, null);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.deleted) return false;
    return (
      <div className="col-sm-4">
        <div
          className="book-item todo"
          // style={{ display: this.state.deleted ? "none" : "block" }}
        >
          <div className="text-center mt-2 mb-2">
            {this.props.img ? (
              <img
                src={
                  // if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
                  this.props.img.smallThumbnail
                    ? this.props.img.smallThumbnail
                    : this.props.img.thumbnail
                    ? this.props.img.thumbnail
                    : ""
                }
                className="img-fluid"
                alt="book cover"
              />
            ) : null}
          </div>
          <div className="aboutBook">
            <h4 className="title mt-2">{this.props.title}</h4>
            <p className="author mt-2">
              By: {this.props.authors ? this.props.authors.join(", ") : "N/A"}
            </p>
          </div>
          <p className="description mt-2">
            {this.props.description
              ? String(this.props.description)
                  .slice(0, 100)
                  .concat("...")
              : "N/A"}
          </p>
          <div className="btnDiv">
            {// if link to book exists include View button else do not
            this.props.link ? (
              <a
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-eye" />
              </a>
            ) : null}
            {// if this.props.path is "/" display save button else display Delete button
            this.props.path === "/" ? (
              <i
                class={!this.state.saved ? "far fa-save" : "fas fa-check"}
                onClick={this.handleSaveClick}
                disabled={this.state.saved}
              />
            ) : (
              <i
                class={"far fa-trash-alt"}
                onClick={this.handleDeleteClick}
                disabled={this.state.deleted}
              />
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default BookResult;
