function Cards({arrJuegos, arrJuegosFiltrados, handleClick}) {
    let juegos = arrJuegos;
    if (arrJuegosFiltrados.length !== 0){juegos = arrJuegosFiltrados};

    return (
        <div className="flex flex-wrap justify-center p-4 bg-yello-500">
            {juegos.map(juego =>{
                return(
                    <div className="w-1/3 p-4" key={juego.id}>
                        <div onClick={()=>handleClick(juego.id)} class="bg-yellow-200 rounded shadow w-96 h-128 p-4 border-2 border-black">
                            <h1 className="font-retro">{juego.titulo}</h1>
                            <img class="w-full h-96 object-cover" src={juego.imagenCaratula} alt={juego.titulo}></img>
                            <h2 className="font-retro">{juego.descripcion}</h2>
                        </div>
                    </div>)
            })}
        </div>
    );
  }
  
  export default Cards;