import Cards from "../Components/Cards"


export default function Homepage() {
    return (
        <>
            <h2>Homepage</h2>
            <p>Guarda i tuoi film preferiti senza pubblicità</p>


            <section className="slider">

                <div className="container">
                    <div className="card-disposition">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>

                <div className="button-view">
                    <button className="left-s-b">←</button>
                    <button className="right-s-b">→</button>
                </div>
            </section>


        </>
    )

}