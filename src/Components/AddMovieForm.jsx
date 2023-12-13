import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TfiClose } from "react-icons/tfi";
export class AddMovieForm extends Component {
  state = {
    movieName: "",
    desc: "",
    trailer: "",
    movie: "",
    image: null,
    categoryId: 2,
    rateCount: 0,
    rating: 0,
    comment: [],
  };
  getImage = (e) => {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };
  render() {
    const categories = this.props.categories;
    return (
      <div className="addMovieForm form-group">
        <Toaster />

        <div className="d-flex justify-content-between">
          <h1>Add Movie</h1>
          <TfiClose
            size="17px"
            style={{ cursor: "pointer", color: "#a95237" }}
            onClick={() => this.props.addMovieForm()}
          />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Movie Name"
          value={this.state.movieName}
          onChange={(e) => this.setState({ movieName: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Movie Description"
          value={this.state.desc}
          onChange={(e) => this.setState({ desc: e.target.value })}
        />
        <input type="file" className="form-control" onChange={this.getImage} />
        <input
          type="text"
          className="form-control"
          placeholder="Movie Trailer Link ID"
          value={this.state.trailer}
          onChange={(e) => this.setState({ trailer: e.target.value })}
          title="https://www.youtube.com/embed/+ -> 1YTm5YuSHgE?si=kXqho1RVhm-v0Jbh"
        />
        <div style={{ color: "white", fontSize: "8px" }}></div>
        <input
          type="text"
          className="form-control"
          placeholder="Movie Link"
          value={this.state.movie}
          onChange={(e) => this.setState({ movie: e.target.value })}
          title="https://my.mail.ru/video/embed/7470177059621306460"
        />
        <select
          name="category"
          id="category"
          value={this.state.categoryId}
          onChange={(e) => this.setState({ categoryId: e.target.value })}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <button
          className="btn-form"
          onClick={() => {
            this.state.movieName !== "" &&
            this.state.desc !== "" &&
            this.state.trailer !== "" &&
            this.state.movie !== "" &&
            this.state.image !== null
              ? this.props.addMovie(this.state)
              : toast.error("Eksik Veri Girdiniz..");
            this.setState({
              movieName: "",
              desc: "",
              trailer: "",
              movie: "",
              image: null,
            });
          }}
        >
          Add Movie
        </button>
      </div>
    );
  }
}
