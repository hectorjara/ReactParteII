function Cards({arrJuegos, arrJuegosFiltrados, handleClick}) {
    let juegos = arrJuegos;
    if (arrJuegosFiltrados.length !== 0){juegos = arrJuegosFiltrados};

    return (
        <ul>
            {juegos.map(juego =>{
                return(
                    <li key={juego.id}>
                        <h1 onClick={()=>handleClick(juego.id)}>{juego.titulo}</h1>
                    </li>)
            })}
        </ul>
    );
  }
  
  export default Cards;