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
          <nav className="bg-yellow-700 p-4">
          <h1 className="text-lime-600" onClick={handleClick}>Juegos 16 Bits</h1>
          </nav>
        </header>        
      </div>
    );
  }
  
  export default Header;