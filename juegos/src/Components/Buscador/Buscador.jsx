import { useState } from "react";

export default function Buscador({juegoEncontrado, buscarJuego}){
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
        <div className="flex justify-center items-center">
        <input className="mx-8 font-retro bg-yellow-200  border-4 border-black text-center p-3 mt-3" placeholder="Buscar Juego" type="text"
            value = {valorinput}
            onChange ={e => cambiaValorYBuscaJuego(e.target.value)}
            onClick={handleClick} >
        </input>
        {juegoEncontrado === "NoEncontrado" && <h2 className="font-retro text-red-500">Juego no Encontrado</h2>}
        </div>        
    )
}