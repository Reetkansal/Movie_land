import { useState, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


//d25e68f7
 const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=d25e68f7';

 const movie1 ={
    
        "Title": "Superman Returns",
        "Year": "2006",
        "imdbID": "tt0348150",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTU4NjkzNzItMDY5ZS00NDY3LWI4YjctMjZjMzIwNzczMTcyXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg"
  
 };

const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm]= useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('superman')
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">   
                 
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length >0
                ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                        
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
        
    );
}

export default App;