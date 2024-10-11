const MovieItem = (props)=>{
    return(
        <div>
            <p>{props.myMovie.Title}</p>
            <p>{props.myMovie.Year}</p>
            <img src ={props.myMovie.Poster} ></img>
            
        </div>
    );
}
export default MovieItem