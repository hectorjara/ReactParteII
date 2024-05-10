function Cards({arrJuegos, arrJuegosFiltrados, handleClick}) {
    let juegos = arrJuegos;
    if (arrJuegosFiltrados.length !== 0){juegos = arrJuegosFiltrados};

    return (
        <div className="flex flex-wrap justify-center">
            {juegos.map(juego =>{
                return(
                    <div className="w-1/3 p-4" key={juego.id}>
                        <div onClick={()=>handleClick(juego.id)} class="bg-white rounded shadow p-6">
                            <h1>{juego.titulo}</h1>
                            <img class="w-full h-32 object-cover" src={juego.imagenCaratula} alt={juego.titulo}></img>
                        </div>
                    </div>)
            })}
        </div>
    );
  }
  
  export default Cards;