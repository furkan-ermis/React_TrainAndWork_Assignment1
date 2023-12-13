import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { PiVideoFill } from "react-icons/pi";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
function Trailer(props) {
  const [modal, setModal] = useState(false);
  let movie = props.movie;
  let add = props.addToFav;
  let remove = props.removeToFav;
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color="success"
        outline
        style={{
          width: "100%",
          border: "none",
          position: "absolute",
          zIndex: "1",
          top: "100px",
        }}
        onClick={toggle}
      >
        <PiVideoFill size="30" color="white" />
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        >
          <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
          <ModalBody>
            <iframe
              title={movie.title}
              width="100%"
              height="500px"
              src={
                "https://www.youtube.com/embed/" +
                movie.trailer +
                "&amp;controls=0&amp&amp;autoplay=1"
              }
            ></iframe>
            <br />
          </ModalBody>
          <ModalFooter>
            {movie.isFavorite ? (
              <button
                className="btn btn-outline-danger"
                onClick={() => remove(movie)}
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
                onClick={() => add(movie)}
              >
                Favorilere Ekle
                <span>
                  &nbsp; &nbsp;
                  <FaRegHeart size="18" />
                </span>
              </button>
            )}{" "}
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}

export default Trailer;
