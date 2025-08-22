import Footer from '../componentes/footer.jsx';
import '../style/index.css';
import { Link } from "react-router-dom";
import carro_info from '../componentes/carros_info.jsx';
import Header from '../componentes/Header.jsx';

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
          position: "relative", 
        }}
      >
        <Header />

        <div className="frase_box">
          <p>
            Seu <strong>Destino</strong> <br />
            Começa <br />
            Com a <strong>Chave</strong> <br />
            Certa
          </p>
        </div>
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
      <Footer />
    </div>
  );
}
