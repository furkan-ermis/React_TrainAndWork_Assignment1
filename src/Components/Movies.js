import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import Trailer from "./Trailer";
export default class Movies extends Component {
  render() {
    let Allmovies = this.props.Allmovies;
    let fav = this.props.fav;
    let Catmovies = this.props.Catmovies;
    let movies;
    if (this.props.currentCategory === "") {
      movies = Allmovies;
    } else if (this.props.currentCategory === "Favoriler") {
      movies = fav;
    } else {
      movies = Catmovies;
    }
    return (
      <div>
        <h2>{this.props.currentCategory}</h2>
        <div className="cards">
          {movies.map((movie) => (
            <div className="card" key={movie.id}>
              <img
                width="100%"
                height="100%"
                src={movie.image}
                alt={movie.movieName}
              />
              <Trailer
                movie={movie}
                removeToFav={this.props.removeToFav}
                addToFav={this.props.addToFav}
              />
              <div className="cardBody">
                <div className="cardTitle">{movie.movieName}</div>
                <div className="cardText">{movie.desc}</div>
                <div className="cardText">
                  <small className="text-muted">{movie.price} ₺</small>
                </div>
                {movie.isFavorite ? (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.props.removeToFav(movie)}
                  >
                    Favorilerden Çıkar
                    <span>
                      &nbsp; &nbsp;
                      <IoMdHeart size="18" />
                    </span>
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => this.props.addToFav(movie)}
                  >
                    Favorilere Ekle
                    <span>
                      &nbsp; &nbsp;
                      <FaRegHeart size="18" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vVJeYMRam0o?autoplay=1&si=rb30dYNM5wtRZyPR&amp;controls=0&amp"
        ></iframe> */}
      </div>
    );
  }
}
