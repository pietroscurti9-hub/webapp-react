
import { Link } from "react-router-dom";

function Cards() {
    return (

        <Link to={`/FilmDectail/`}>
            <div className="card-body">
                <h5 className="card-title">titolo</h5>
                {/* <img src="" alt="" className="card-img-top" /> */}
                <p className="card-text">category </p>
            </div>
        </Link>
);
}

export default Cards;



