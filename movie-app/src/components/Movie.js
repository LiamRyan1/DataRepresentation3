import MovieItem from "./movieItem";

const Movies = (props) => {
    return props.myMovies.map(
        ()=>{
            return <MovieItem/>
        }
       
    );
  };

export default Movies;