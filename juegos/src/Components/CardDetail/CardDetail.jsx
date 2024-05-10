function CardDetail({unJuego}) {

    return (
        <div className="flex flex-wrap  justify-center p-4">
            <div className="p-4 ">
                <div class="bg-yellow-200 rounded shadow w-128 h-1280 p-4 border-2 border-yello-100">
                    <h1 className="font-retro">{unJuego.titulo}</h1>
                    <h1 className="font-retro">Genero: {unJuego.genero}</h1>
                    <img class="w-64 h-96 object-cover" src={unJuego.imagenCaratula} alt={unJuego.titulo}></img>
                    <h2 className="font-retro">{unJuego.descripcion}</h2>
                    {unJuego && unJuego.imagenes ? unJuego.imagenes.map(imag => {
                        return <img class="w64 h-64 object-cover" src={imag} alt={unJuego.titulo}></img>
                    }) : 'Cargando...'}
                </div>
            </div>
        </div>
    );
  }
  
  export default CardDetail;