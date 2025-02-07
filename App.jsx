import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {contactData}from './pages/Contact';
import {Movies} from './pages/Movies';
import {Layout} from './layout/Layout';
import {ErrorPage} from './pages/ErrorPage';
import {getMovieData} from './UI/GetMovieData';
import {getMovieDetails} from './UI/GetMovieDeatails';
import {MovieDetails} from './pages/MovieDetails';

const App = ()=>{

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout />,
            errorElement:<ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/About",
                    element: <About/>,
                },
                {
                    path: "/Movies",
                    element: <Movies/>,
                    loader: getMovieData,
                },
                {
                    path: "/movies/:movieid",
                    element: <MovieDetails/>,
                    loader: getMovieDetails,
                },
                {
                    path: "/Contact",
                    element: <Contact/>,
                    action: contactData,
                },
            ]
        },
       
    ]);

    return(
        <RouterProvider router={router}/>
    );

 };
export default App;