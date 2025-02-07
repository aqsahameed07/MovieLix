export const getMovieData = async ({params}) => {
    console.log(params);
    try {
        const res = await fetch(
            `https://www.omdbapi.com/?s=Guardians&apikey=a5a13c38`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
 };

//http://www.omdbapi.com/?i=tt3896198&apikey=a5a13c38
//https://www.omdbapi.com/?s=Guardians&apikey=a5a13c38
/* 

const res = await fetch(
    `https://www.omdbapi.com/?s=Guardians&apikey=${import.meta.env.VITE_API_KEY}`
);

 const res = await fetch(
            `https://www.omdbapi.com/?s=Guardians&apikey=a5a13c38`
        );

*/