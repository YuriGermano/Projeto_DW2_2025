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
          backgroundSize: "contain", /* mostra a imagem inteira */
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh", /* ocupa a tela inteira */
          width: "100%",
        }}
      >
          <header>
            <nav class="navbar">
              <div class="logo">
                <img src="/imagens/logo.png" alt="logo_site" />
              </div>
              <div class="escritas_header">
                <a href="#"><p>Home</p></a>
                <a href="#carros"><p>Carros</p></a>
                <a href="#"><p>Sobre Nós</p></a>
                <a href="#"><p>Contato</p></a>
              </div>
            </nav>

            <div id="frase_inicial">
              <p>
                SEU <strong>DESTINO</strong><br />
                COMEÇA<br />
                COM A <strong>CHAVE</strong><br />
                CERTA
              </p>
            </div>

            <div id="retangulo_inicial"></div>
          </header>
        </section>




      { /* lembrete para Filipe, Laura e Bianca: NÃO MEXER NISSO AQUI */}

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

      { /* lembrete para Filipe, Laura e Bianca: NÃO MEXER NISSO AQUI */}

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
