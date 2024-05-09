import { useState } from "react";

export default function Buscador({buscarJuego}){
    const [valorinput, setValorInput] = useState("");

    function cambiaValorYBuscaJuego(valor){
        setValorInput(valor);
        buscarJuego(valor);
    }
    function handleClick(){
        setValorInput("");
        buscarJuego("");
    }

    return (
        <>
                <input placeholder="Buscar Juego" type="text"
                    value = {valorinput}
                    onChange ={e => cambiaValorYBuscaJuego(e.target.value)}
                    onClick={handleClick} >
                </input>
        </>
    )
}