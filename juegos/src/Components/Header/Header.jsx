import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";

function Header() {
    const navegar = useNavigate();

    function handleClick(){
        navegar(ROUTES.home);
    }

    return (
      <div className="Header">
        <h1 onClick={handleClick}>Juegos 16 Bits</h1>
      </div>
    );
  }
  
  export default Header;