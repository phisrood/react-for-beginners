import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(()=> {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <strong>Loading...</strong> : <div>
                <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.description_full} genres={movie.genres} />
            </div>}
        </div>
    )
}

export default Detail;