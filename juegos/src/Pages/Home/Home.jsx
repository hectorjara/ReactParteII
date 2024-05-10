import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import Buscador from "../../Components/Buscador/Buscador";
function Home() {
    const [juegos, setJuegos] = useState([]);
    const [juegosFitrados, setJuegosFiltrados] = useState([]);
    const navegar = useNavigate();

    const fetchJuegos = async () =>{
        const response = await fetch("/mocks/juegos.json");
        const result = await response.json();
        setJuegos(result);
    };

    function irDetalleJuego(id){
        navegar(ROUTES.detalles.slice(0,-3)+id); //Esto solo quita ":id"  de "detalles:id" y añade el id
    };

    function buscarJuego(valor){
        if (valor === ""){setJuegosFiltrados([])};
        const juegosEncontrados = juegos.filter(juego =>juego.titulo.toLocaleLowerCase().includes(valor.toLowerCase()));
        setJuegosFiltrados(juegosEncontrados);
    };

    useEffect(() => {
        fetchJuegos()
        },
    []);

    return (
        <div className="Home bg-yellow-500">
        <Header/>
        <Buscador buscarJuego={buscarJuego} />
        <Cards arrJuegos={juegos} arrJuegosFiltrados={juegosFitrados} handleClick={irDetalleJuego} />
        <Footer/>
        </div>
    )
}

export default Home;