import { useLoaderData } from "react-router-dom";
import "./Movies.css";
import {MovieUI} from "./MovieUI";
export const Movies = () => {
    const loadData = useLoaderData();
    console.log(loadData);
    return (
        <div className="movies-container">
            <ul className="movies-list">
                {loadData?.Search ? (
                    loadData.Search.map((data) => (
                        <MovieUI data={data} key={data.imdbID} />
                    ))
                ) : (
                    <p className="no-movies">No movies found.</p>
                )}
            </ul>
        </div>
    );
};