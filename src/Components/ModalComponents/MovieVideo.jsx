function MovieVideo({ movie, Path }) {
  return (
    <>
      <iframe
        title={movie.title}
        width="100%"
        height="500px"
        src={Path}
        allowFullScreen
      ></iframe>
    </>
  );
}

export default MovieVideo;
