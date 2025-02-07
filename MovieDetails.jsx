import { useLoaderData } from "react-router-dom";
import './MovieDetails.css';

export const MovieDetails = ()=>{
    const loadDetails = useLoaderData();
    const {Poster, Title , Plot, Genre, Released, Rated ,Ratings }=loadDetails;
    return(
        <div className="movie-details">
        <div className="poster">
            <img src={Poster} alt={`${Title} Poster`} />
        </div>
        <div className="details">
            <h1 className="title">{Title}</h1>
            <p className="plot">{Plot}</p>
            <p><span>Genre:</span> {Genre}</p>
            <p><span>Released:</span> {Released}</p>
            <p><span>Rated:</span> {Rated}</p>
            <div className="ratings">
                <span>Ratings:</span>
                <ul>
                    {Ratings.map((rating, index) => (
                        <li key={index}>{rating.Source}: {rating.Value}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );

}