
import { Link } from "react-router-dom";



function Cards({film}) {

    

    return (



        <Link to={`/FilmDectail/`} >
            <div className="card" style={{ width: "21rem" }} >
                <img src={`/public/${film.image}`} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{film.title}</h5>
                    <p className="card-text">{film.genre}</p>
                    {/* <button className="btn btn-primary">Vedi dettagli</button> */}
                </div>
            </div>
        </Link>
    );
}

export default Cards;



