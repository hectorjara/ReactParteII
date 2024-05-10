import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";

function Header() {
    const navegar = useNavigate();

    function handleClick(){
        navegar(ROUTES.home);
    }

    return (
      <div className="Header">
        <header>
          <nav className="bg-yellow-700 p-6">
          <h1 className="font-retro" onClick={handleClick}>
            <span className="bg-yellow-200 border-4 border-black px-3 py-3">Juegos 16 Bits</span>
          </h1>
          </nav>
        </header>        
      </div>
    );
  }
  
  export default Header;