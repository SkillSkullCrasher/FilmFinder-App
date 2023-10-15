// import from "index.css"
// import {MovieCard  } from "in";

export default function MovieCard(props){
    const movie=props.data;
    return (
        <div key={movie.id} className="center">
                        
         {/* <h5>Related Search....................</h5>            */}
        <h3>{movie.title}</h3>
        <h3>{movie.release_date}</h3>
        {/* <h3>{vote_average}Ratings</h3> */}
     
     <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="center"/>
    
     

        </div>
    )
}