import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
function Home() {
    const [juegos, setJuegos] = useState([]);
    const navegar = useNavigate();

    const fetchJuegos = async () =>{
        const response = await fetch("/mocks/juegos.json");
        const result = await response.json();
        setJuegos(result);
    };

    function handleClick(id){
        navegar(ROUTES.detalles.slice(0,-3)+id); //Esto solo quita ":id"  de "/detalles/:id" y añade el id
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
                        <h1 onClick={()=>handleClick(juego.id)}>{juego.titulo}</h1>
                    </li>)
            })}
        </ul>
        <Footer/>
        </div>
    )
}

export default Home;