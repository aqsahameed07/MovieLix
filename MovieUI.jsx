import { NavLink } from "react-router-dom";
import "./MovieUI.css"

export const MovieUI = ({data}) => {
    const {Poster , Title , imdbID}= data;
    return (
        
        <li className="movie-item">
            <img src={Poster} alt="Poster_Img" />
            <p>{Title}</p>
            <NavLink to={`/movies/${imdbID}`}>
            <button className="watch-now-btn">Watch Now</button>
            </NavLink>
        </li>
     
    );
};

