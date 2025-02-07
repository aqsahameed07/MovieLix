
 export const getMovieDetails = async ({params}) => {
    console.log(params);
    const id = params.movieid;
    console.log(id);
   try {
       const res = await fetch(
           `http://www.omdbapi.com/?i=${id}&apikey=a5a13c38`
       );
       const data = await res.json();
       console.log(data);
       return data;
   } catch (error) {
       console.log(error.message);
   }};