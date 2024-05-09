import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
function Home() {
    const [juegos, setJuegos] = useState([]);
    const navegar = useNavigate();

    const fetchJuegos = async () =>{
        const response = await fetch("/mocks/juegos.json");
        const result = await response.json();
        setJuegos(result);
    };

    function irDetalleJuego(id){
        navegar(ROUTES.detalles.slice(0,-3)+id); //Esto solo quita ":id"  de "detalles:id" y añade el id
    };

    useEffect(() => {
        fetchJuegos()
        },
    []);

    return (
        <div className="Home">
        <Header/>
        <Cards arrJuegos={juegos} handleClick={irDetalleJuego} />
        <Footer/>
        </div>
    )
}

export default Home;