import { Link } from "react-router-dom";
import "../style/index.css"; 

function Header_carros() {
  return (
    <header>
      <nav className="navbar_carros">
        <div className="logo_carros">
          <img src="/imagens/logo.png" alt="logo_site_carros" />
        </div>
        <div className="escritas_header">
          <Link to="/"><p>Home</p></Link>
          <a href="#carros"><p>Carros</p></a>
          <p>Sobre Nós</p>
          <p>Contato</p>
        </div>
      </nav>
    </header>
  );
}

export default Header_carros;








