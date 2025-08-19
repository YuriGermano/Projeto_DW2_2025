import { Link } from "react-router-dom";
import "../style/index.css"; 

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/imagens/logo.png" alt="logo_site" />
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

export default Header;