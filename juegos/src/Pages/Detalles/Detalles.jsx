import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
function Detalles() {
    const params = useParams();
    const [juego, setJuego] = useState("");
    const fetchJuego = async () =>{
        const response = await fetch("/mocks/juego-" + params.id + ".json");
        const result = await response.json();
        setJuego(result);        
    };

    useEffect(() => {
        fetchJuego()
        },
    );

  return (
    <div className="Detalles">
      <Header/>
      <h1>Detalles</h1><br/>
      <h2>El juego es {juego.titulo}</h2>
      <Footer/>
    </div>
  );
}

export default Detalles;