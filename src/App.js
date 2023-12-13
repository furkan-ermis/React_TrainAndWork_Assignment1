// App.js
import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./site.css";

export default class App extends Component {
  state = {
    currentCategory: "",
    movies: [],
    isFormOpen: false,
    favoriteMovies: [],
    categories: [],
  };

  componentDidMount() {
    this.getMovies();
    this.getCategories();
  }

  getCategories = () => {
    let url = "http://localhost:3000/categories";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
      .catch((error) => this.setState({ error: error.message }));
  };
  getMovies = (categoryId) => {
    this.setState({ loading: true, error: null });

    let url = "http://localhost:3000/movies";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data, loading: false }))
      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getMovies(category.id);
  };

  updateFavorite = (movie) => {
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then(() => {
        return fetch(`http://localhost:3000/movies?isFavorite=true`);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ favoriteMovies: data });
      })
      .catch((error) => {
        console.error("Error updating favorite:", error);
      });
  };

  getFavs = () => {
    this.setState({ currentCategory: "Favoriler" });
  };

  changeFavorite = (movie) => {
    movie.isFavorite = !movie.isFavorite;
    this.updateFavorite(movie);
  };

  addMovie = (newMovie) => {
    fetch(`http://localhost:3000/movies`, {
      method: "POST", // Change to POST for adding a new resource
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then(() => {
        return fetch(`http://localhost:3000/movies`);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch((error) => {
        console.error("Error adding movie:", error);
      });
    this.setState({ currentCategory: "" });
  };

  render() {
    const addMovieForm = () => {
      this.setState({ isFormOpen: !this.state.isFormOpen });
    };

    return (
      <div className="main">
        <Header
          isFormOpen={this.state.isFormOpen}
          addMovieForm={addMovieForm}
          getFavs={this.getFavs}
          favoriteMovies={this.state.favoriteMovies}
        />
        <Container>
          <Row>
            <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
            />
            <Movies
              addMovieForm={addMovieForm}
              categories={this.state.categories}
              addMovie={this.addMovie}
              isFormOpen={this.state.isFormOpen}
              changeFavorite={this.changeFavorite}
              movies={this.state.movies}
              favoriteMovies={this.state.favoriteMovies}
              currentCategory={this.state.currentCategory}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
