import React, { useState } from "react";
import { PiVideoFill } from "react-icons/pi";
import { Button, Modal, ModalFooter } from "reactstrap";
import MovieComment from "./ModalComponents/MovieComment.jsx";
import MovieVideo from "./ModalComponents/MovieVideo.jsx";
import Review from "./ModalComponents/Review.jsx";
function MovieModal(props) {
  const [modal, setModal] = useState(false);
  const [isMovie, setIsMovie] = useState(false);
  const toggle = () => setModal(!modal);
  let movie = props.movie;
  const trailerPath =
    "https://www.youtube.com/embed/" +
    movie.trailer +
    "&amp;controls=0&amp&amp;autoplay=1";
  const moviePath = movie.movie;
  const getMovie = (movie) => {
    setIsMovie(!isMovie);
  };

  return (
    <div>
      <Button className="btn-priority" outline onClick={toggle}>
        <PiVideoFill size="30" color="white" />
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <div className="Modal">
          {/* watch movie butonuna tıklanmışsa 
          isMovie true yap ve film adresini gönder  */}
          {!isMovie ? (
            <MovieVideo movie={movie} Path={trailerPath} />
          ) : (
            <MovieVideo movie={movie} Path={moviePath} />
          )}
          <br />
          <ModalFooter style={{ fontSize: "2.3em" }}>
            <Review
              moviePath={moviePath}
              trailerPath={trailerPath}
              movie={movie}
              isMovie={isMovie}
              getMovie={getMovie}
              changeFavorite={props.changeFavorite}
            />
          </ModalFooter>
          <hr style={{ border: "2px solid white" }} />
          <MovieComment movie={movie} />
        </div>
      </Modal>
    </div>
  );
}

export default MovieModal;
