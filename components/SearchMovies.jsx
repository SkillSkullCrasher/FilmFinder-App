export default function SearchMovies(){
    function fetchMovies(event) {
        event.preventDefault();
        const url=`https://api.themoviedb.org/3/search/movie?&api_key=58beb83263c66afc9b07b87a5f0fd505&query=transformers&include_adult=false&language=en-US&page=1`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data));
    }
    return (
        <>
        <from className="form" onSubmit={fetchMovies}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input type="text" name="query" placeholder="Enter movie plz"></input>
        <button className="button" type="submit">Search</button>
        </from>
        </>
    )
}