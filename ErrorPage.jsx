import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = ()=>{

    const error = useRouteError();
    console.log(error);

    const nav = useNavigate();
    if(error.status ===404)
        return(
            <div>
                <section className="error-page">
                    <img src="https://i.pinimg.com/originals/66/17/f4/6617f447369d9c9491b67bb82766110e.gif"/>
                    <p>The page you are looking for does not exist</p>
                    <p>Error Type: {error.status}</p>
                    <button className="link" onClick={()=>nav(-1)}>Go Back</button>
                    <NavLink className="link" to="/">Back to Homepage</NavLink>
                </section>
            </div>
        );
    return(
    <>
       <h1>Unexpected Error</h1>
    </>
);
}