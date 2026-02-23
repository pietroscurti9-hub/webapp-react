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
        <div className="container">
            <h2>Homepage</h2>
            <p>Guarda i tuoi film preferiti senza pubblicità</p>

            <div ref={containerRef} className="card-disposition">

                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />

            </div>
            <div className="button-view">
                <button onClick={scrollLeft}>←</button>
                <button onClick={scrollRight}>→</button>

            </div>
        </div>
    );
}





