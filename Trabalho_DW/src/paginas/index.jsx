import Footer from '../componentes/footer.jsx';
import '../style/index.css';
import { Link } from "react-router-dom";
import carro_info from '../componentes/carros_info.jsx';

export default function Main() {
  return (
    <div id='div_mae'>
      {/* Seção inicial */}
      <section 
        id="pagina_inicial"
        style={{
          backgroundImage: "url('/imagens/imgfundo.png')",
          backgroundSize: "cover",
          width: "1530px",
          marginLeft: "-10%", 
          marginTop: "-32px",
        }}
      >
        <div id="quadrado_inicial"></div>
        <header>
          <nav className="navbar">
            <div className="logo">
              <img src="/imagens/logo.png" alt="logo_site" />
            </div>
            <div className="escritas_header">
              <p>Home</p>
              <a href="#carros"><p>Carros</p></a>
              <p>Sobre Nós</p>
              <p>Contato</p>
            </div>
          </nav>
        </header>
        <div id="frase_inicial">
          <p>Seu <strong>Destino</strong> <br />Começa<br /> Com a <strong>Chave</strong><br /> Certa</p>
        </div>
        <div id="retangulo_inicial"></div>
      </section>

      {/* Lista de carros */}
      {/* carro_info é uma array e serve para armazenar as informações dos carros */}
      {carro_info.map((carro) => (        
        <section className="carros" key={carro.id} id="carros">   {/*  key={carro.id} → identifica unicamente cada item do .map() */}
          <div className="grid_container">
            <Link to={`/carro/${carro.id}`}>
              <div className="carro">
                <div className="text">
                  <h1>{carro.nome}</h1>
                  <p>Preço: {carro.preco}</p>
                </div>
                <img src={carro.imagem[0]} alt={carro.nome} />
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
