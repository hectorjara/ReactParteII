import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
function Home() {
    const [juegos, setJuegos] = useState([]);
    const fetchJuegos = async () =>{
        const response = await fetch("/mocks/juegos.json");
        const result = await response.json();
        setJuegos(result);
    };

    useEffect(() => {
        fetchJuegos()
        },
    []);

    return (
        <div className="Home">
        <Header/>
        <ul>
            {juegos.map(juego =>{
                return(
                    <li key={juego.id}>
                        <h1>{juego.titulo}</h1>
                    </li>)
            })}
        </ul>
        <Footer/>
        </div>
    )
}

export default Home;