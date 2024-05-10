import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import CardDetail from "../../Components/CardDetail/CardDetail";
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
      <CardDetail unJuego={juego}/>
      <Footer/>
    </div>
  );
}

export default Detalles;