import './App.css'
import { useEffect, useState } from 'react'

function App() {

    //inicamos data como un array vacio
    const [movies, setMovies] = useState ([]) 

    const movieData = async () => {
        const url = "https://api.themoviedb.org/3/movie/550?api_key=94adc9ea07c8dd3909755da8a521ec9e"
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        console.log(data);
    }
    useEffect(() => {
        //obtengo los datos desde la API 
        movieData()
    }, [])
    return (
        <div>
            {
                //renderizamos data desde un mapeo del array
            movies.map (movie => (
                <div key= {movie.id}> {movie.name}
                    <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.original_title}/>
                    <p> </p>
                </div>
                ))
            }
        </div>
    )
}

export default App