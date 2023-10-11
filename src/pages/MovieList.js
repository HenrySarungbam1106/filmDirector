// import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";


export const MovieList = ({apiPath, title}) => {
  //const [movies, setMovies] = useState([]);  
  const {data: movies} = useFetch(apiPath);

  const pageTitle = useTitle(title);

  // useEffect(() => { 
  //   document.title = `${title} / FilmDirectory`
  // });


  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=> (
            <Card key = {movie.id} movie = {movie}/>
          ))}
          </div>
        </section>
    </main>
  )
}
