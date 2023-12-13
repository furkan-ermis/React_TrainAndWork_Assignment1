import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./site.css";
export default class App extends Component {
  state = {
    currentCategory: "",
    Catmovies: [],
    Allmovies: [],
    fav: [],
    movies: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = () => {
    let url = "http://localhost:3000/movies";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ Allmovies: data }));
  };
  getMoviesByCategory = (categoryId) => {
    let url = "http://localhost:3000/movies";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ Catmovies: data }));
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getMoviesByCategory(category.id);
  };

  getFavs = () => {
    this.setState({ currentCategory: "Favoriler" });
  };

  addToFav = (movie) => {
    movie.isFavorite = !movie.isFavorite;
    let newFav = this.state.fav;
    newFav.push(movie);
    this.setState({ fav: newFav });
  };

  removeToFav = (movie) => {
    movie.isFavorite = !movie.isFavorite;

    const newnewfav = this.state.fav.filter((i) => i.id !== movie.id);
    this.setState({ fav: newnewfav });
  };

  render() {
    return (
      <div className="main">
        <Header
          fav={this.state.fav}
          statu={this.state.statu}
          getFavs={this.getFavs}
        />
        <Container>
          <Row>
            <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
            />
            <Movies
              addToFav={this.addToFav}
              removeToFav={this.removeToFav}
              Allmovies={this.state.Allmovies}
              Catmovies={this.state.Catmovies}
              fav={this.state.fav}
              currentCategory={this.state.currentCategory}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
