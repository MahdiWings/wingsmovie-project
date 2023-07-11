import { useState , useEffect } from "react";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";
import "./App.css"

//API Key from omdb : a00c4014

const Api_Key = "http://www.omdbapi.com?apikey=a00c4014"

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

    const [movies , setMovies] = useState([])
    const [searchTerm , setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch (`${Api_Key}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies();
      }, []);

    return (
        <div className="app">
            <h1>WingsMovie</h1>
            
            <div className="search">
            <input
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            
            onClick={()=> searchMovies(searchTerm)}
            />
            </div>

            {
                movies ?.length > 0 ? (
                <div className="container">
                    {/* <MovieCard movie1={movie1[0]} /> */}
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))
                    }
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        <div className="Footer">
            <p>Contact with Mahdi and <a target="_blank" href="https://wingswebs.ir">WingsMovie</a> Team</p>
        </div>

        </div>

    )
}

export default App;