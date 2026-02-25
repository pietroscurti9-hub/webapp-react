import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
const endpoint = 'http://localhost:3000/api/movies/'


export default function FilmDectail() {

    // PRENDO ID FILM DA URL ROTTA
    const { id } = useParams();
    // CREO ISTANZA DEL NAVIGATE PER POTERLO UTILIZZARE
    const redirect = useNavigate();
    // SET VIARIABILE DI STATO PER IL FILM
    const [film, setFilm] = useState({});

    const fetchFilms = () => {
        axios.get(endpoint + id)
            .then(res => { setFilm(res.data); })
            .catch(err => { console.log('errore chiamata'); })
    }

    useEffect(fetchFilms, []);

    return (
        <>
            <section className="section-ui">




                <div className="box-container">
                    <div className="left-box-film">
                        <img src={`/public/${film.image}`} alt="" className="left-box-img" />
                    </div>


                    <div className="right-box-container">

                        <div className="title-container">
                            <h5 className="grey-color">Titolo</h5>
                            <h2 className="white-color">{film.title}</h2>
                        </div>

                        <div className="right-box-info">

                            <div>
                                <h5 className="grey-color">Genere</h5>
                                <p className="white-color">{film.genre}</p>
                            </div>

                            <div>
                                <h5 className="grey-color">Direttore</h5>
                                <p className="white-color">{film.director}</p>
                            </div>

                            <div>
                                <h5 className="grey-color">Data di rilascio</h5>
                                <p className="white-color">{film.release_year}</p>
                            </div>

                        </div>

                        <div className=".text-a-center">
                            <h5 className="grey-color">Descrizione</h5>
                            <p className="white-color"> {film.abstract}</p>
                        </div>

                    </div>



                </div>


            </section>
        </>
    )
}