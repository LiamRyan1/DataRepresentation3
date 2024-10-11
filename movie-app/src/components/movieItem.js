const MovieItem = (props)=>{
    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <footer>{props.myMovie.Year}</footer>
            <img src ={props.myMovie.Poster} ></img>
            
        </div>
    );
}
export default MovieItem