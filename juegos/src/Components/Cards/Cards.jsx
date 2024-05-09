function Cards({arrJuegos, handleClick}) {

    return (
        <ul>
            {arrJuegos.map(juego =>{
                return(
                    <li key={juego.id}>
                        <h1 onClick={()=>handleClick(juego.id)}>{juego.titulo}</h1>
                    </li>)
            })}
        </ul>
    );
  }
  
  export default Cards;