import { useState } from "react";
import MovieCard from "./MovieCard";
import MultiActionAreaCard from "./MaterialCard";
import { Grid } from "@mui/material";
import "./style.css";

export default function Search(){
    const[movieName,setMovieName]=useState("");
    const[movies,setMovies]=useState([]);
    
    function fetchMovies(event) {
        event.preventDefault();
        console.log("fetch");
        const url=`https://api.themoviedb.org/3/search/movie?&api_key=58beb83263c66afc9b07b87a5f0fd505&query=${movieName}&include_adult=false&language=en-US&page=1`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMovies(data.results));
    }

    function handleInput(event) {
        // console.log(event.target.value);
        setMovieName(event.target.value);
    }
    return (
        <>
        <form className="form" onSubmit={fetchMovies} >
        {/* <label className="label" htmlFor="query">Movie Name</label> */}
        <input className="label"  type="text" name="query" placeholder="Search your favourite movie....." value={movieName} onChange={handleInput}></input>
        <button className="button" type="submit">Search</button>
        </form>
        <Grid container columnGap={4}>
       { movies.map(movie=>
                 <MultiActionAreaCard data={movie} />
                )}
        </Grid>
        {/* <div>
            {
                movies.map(movie=>
                 <MultiActionAreaCard data={movie} />
                )
                // movies.map(movie=> <h3>{movie.video}</h3>)
                
            }
        </div> */}
        </>
    )
}


