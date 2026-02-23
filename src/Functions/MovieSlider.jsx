import { useRef } from "react";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards";
export default function MovieSlider() {
    const containerRef = useRef(null);

    const cardWidth = 336;

    function scrollLeft() {
        containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }

    function scrollRight() {
        containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }


    return (
        <section className="section-ui">

            <div className="container">
                <h2 className="movie-slider-intro">Guarda i tuoi film preferiti senza pubblicità</h2>
                

                <div ref={containerRef} className="card-disposition">

                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />

                </div>
                <div className="button-view">
                    <button onClick={scrollLeft} className="scroll-button">←</button>
                    <button onClick={scrollRight} className="scroll-button">→</button>

                </div>
            </div>

        </section>



    );
}





