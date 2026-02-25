import { useRef } from "react";
import Cards from "../Components/Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function MovieSlider() {

    // SEZIONE CHIAMATA AXIOS
    const endpoint = 'http://localhost:3000/api/movies/'

    const [films, setFilms] = useState([])

    const fetchFilms = () => {
        axios.get(endpoint)
            .then(res => { setFilms(res.data) })
            .catch(err => { console.log(err) })
    }

    useEffect(fetchFilms, []);





    // SEZIONE MOVIESLIDERBUTTONS
    const containerRef = useRef(null);

    const cardWidth = 351;

    function scrollLeft() {
        containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }

    function scrollRight() {
        containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }


    return (
        <section className="section-ui">

            <div className="container">
                <h2 className="movie-intro">I MENO VISTI DEL MOMENTO</h2>


                <div className="button-view">
                    <button onClick={scrollLeft} className="scroll-button">
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </button>
                    
                    <button onClick={scrollRight} className="scroll-button">
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </button>
                </div>

                <div ref={containerRef} className="card-disposition">

                    {/* // FUNZIONE DI RENDER FILMS */}

                    {films.map(film => (

                        <Cards key={film.id} film={film} />
                    ))}

                </div>
            </div>

        </section>



    );
}





