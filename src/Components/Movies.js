// Movies.js
import React, { Component } from "react";
import { AddMovieForm } from "./AddMovieForm";
import FavoriteButton from "./FavoriteButton";
import MovieModal from "./MovieModal";

export default class Movies extends Component {
  horizontalScroll(event) {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 250;
  }

  render() {
    const {
      movies: currentMovies,
      isFormOpen,
      changeFavorite,
      favoriteMovies,
    } = this.props;

    const movies =
      this.props.currentCategory === "Favoriler"
        ? favoriteMovies
        : currentMovies;

    return (
      <div className="wrapper-cards">
        <h2>{this.props.currentCategory}</h2>
        <div className="above-cards">
          <div className="cards" onWheel={this.horizontalScroll}>
            {movies.map((movie) => (
              <div className="card" key={movie.id}>
                <img
                  width="100%"
                  height="100%"
                  src={movie.image}
                  alt={movie.movieName}
                />

                <div className="cardBody">
                  <MovieModal movie={movie} changeFavorite={changeFavorite} />
                  <h5 className="cardTitle">
                    <strong>{movie.movieName}</strong>
                  </h5>
                  <div className="cardText">{movie.desc}</div>
                  <div className="cardText">
                    <small className="text-muted">{movie.price} ₺</small>
                  </div>

                  <FavoriteButton
                    movie={movie}
                    changeFavorite={changeFavorite}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isFormOpen && (
          <AddMovieForm
            addMovieForm={this.props.addMovieForm}
            categories={this.props.categories}
            addMovie={this.props.addMovie}
          />
        )}
      </div>
    );
  }
}
