import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiUser } from "react-icons/ci";
function MovieComment({ movie }) {
  const [_comment, set_comment] = useState("");
  const [comment, setComment] = useState([movie.comment]);
  const [_name, set_name] = useState("");
  const AddComment = (movie) => {
    _name !== "" && _comment !== ""
      ? movie.comment.push({ isim: _name, yorum: _comment })
      : toast.error("Lütfen Yorumunuzu ve Adınızı Giriniz");
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then(() => {
        return fetch(`http://localhost:3000/movies/${movie.id}`);
      })
      .then((response) => response.json())
      .then((data) => {
        setComment(data.comment);
      });
    set_name("");
    set_comment("");
  };
  return (
    <>
      <h1> &nbsp;Comments</h1>
      <Toaster />
      <div className="oldComments">
        {movie.comment.map((comment) => (
          <div
            className="oldComment"
            key={comment.isim}
            style={{ marginBlock: "14px" }}
          >
            <h2>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              >
                <CiUser size="25px" />
              </span>
              &nbsp;&nbsp;&nbsp;{comment.isim}
            </h2>
            <p>{comment.yorum}</p>
          </div>
        ))}
      </div>
      <div className="comment  w-75 form-group  border-0 p-5">
        <h3>Add Comment</h3>
        <input
          type="text"
          className="form-control border-0 "
          placeholder="Your Name.."
          value={_name}
          onChange={(event) => set_name(event.target.value)}
        />
        <br />
        <textarea
          name="comment"
          className=" border-0 form-control"
          id="comment"
          cols="20"
          rows="10"
          placeholder="Enter Your Comment.."
          value={_comment}
          onChange={(event) => set_comment(event.target.value)}
        ></textarea>
        <br />
        <button
          onClick={() => AddComment(movie)}
          className="btn btn-outline-secondary px-5 "
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default MovieComment;
