import Movie from "../components/Movie"
export default function Movies(props) {
  const { movies = [] } = props
  return (
    <div className="movies">
      {
        movies.length ?
          movies.map(movie => (
            <Movie key={movies.imdbID} {...movie} />
          ))
          : <h4>Not Fount 404</h4>
      }

    </div>
  )
}