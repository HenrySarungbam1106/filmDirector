import { Link } from "react-router-dom";
import pagenotfound  from "../asset/pagenotfound.png";
import {Button} from "../components";
import { useEffect } from "react";

export const PageNotFound = () => {
  
  useEffect(() => { 
    document.title = `Page Not Found / FilmDirectory`
  });


  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-5xl text-gray-900 font-bold my-10 dark:text-white">404, Ooops!<br></br><br></br>Page Not Found</p>
          <div className="max-w-5xl">
            <img className="rounded" src={pagenotfound} alt="404! Page Not Found!" />
          </div>          
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home Page</Button>
          </Link>          
        </div>
      </section>
    </main>
  )
}
