import { useParams } from "react-router-dom";
import { useState } from "react";
import carro_info from "../componentes/carros_info.jsx";
import { mudarImagem, calcularPreco } from "../componentes/carroLogica.js";
import "../style/Carro.css";
import Footer from "../componentes/footer.jsx";
import Header_carros from "../componentes/Header_carros.jsx";

export default function Carros() {
  const { id } = useParams();
  const carro = carro_info.find((carro) => carro.id === parseInt(id));

  const [imgIndex, setImgIndex] = useState(0); 
  const [opcao, setOpcao] = useState(0); 

  if (!carro) {
    return <h1>Carro não encontrado</h1>;
  }

  return (
    <div id="pagina_detalhe">
      <Header_carros />

      <div className="carro-container">
        <div className="carro-imagem">
          <button className="seta" onClick={() => setImgIndex(mudarImagem("prev", imgIndex, carro.imagem.length))}>❮</button>
          <img src={carro.imagem[imgIndex]} alt={carro.nome} />
          <button className="seta" onClick={() => setImgIndex(mudarImagem("next", imgIndex, carro.imagem.length))}>❯</button>
        </div>

        <div className="carro-config">
          <h2>{carro.nome}</h2>
          <h3>Etapa 1 de 4</h3>
          <h3>Configuração de Motor</h3>  

          {carro.preco.map((preco, i) => (
            <label 
              className={`opcao ${opcao === i ? "selecionada" : ""}`} 
              key={i}
              onClick={() => setOpcao(i)}
            >
              <input
                type="radio"
                name="motor"
                checked={opcao === i}
                onChange={() => setOpcao(i)}
              />

              <div className="opcao-header">
                <span className="radio-falso"></span>
                <p className="opcao-titulo">Opção {i + 1}</p>
              </div>

              <div className="opcao-info">
                <p className="opcao-preco">{preco}</p>
                <p className="opcao-acel">{carro.aceleracao[i]} (0–100 Km/h)</p>
                <p className="opcao-pot">{carro.potencia[i]}</p>
              </div>
            </label>
          ))}


        </div>
      </div>

      <div className="carro-info-bottom">
        <h2>{carro.nome}</h2>
        <p>Preço Total: {calcularPreco(carro, opcao)}</p>
        
          <div className="finalizacao">
            <button>Finalizar</button>
          </div>
    
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}



//export default function Carros() {
  //const { id } = useParams(); // Pega o id da URL
  //const carro = carro_info.find((carro) => carro.id === parseInt(id)); // Encontra o carro com o id correspondente e transforma o id em número

//  if (!carro) {
  //  return <h1>Carro não encontrado</h1>
 // }
  //return(
    //<div>
      //<section id="detalhes_carro">
        //  <h1>{carro.nome}</h1>
         // <p>Potência: {carro.potencia}</p>
         // <p>Transmissão: {carro.transmissao}</p>
         // <p>Motor: {carro.motor}</p>
         // <p>Aceleração: {carro.aceleracao}</p>
         // <p>Tração: {carro.tracao}</p>
         // <p>Preço: {carro.preco}</p>
         // <img src={carro.imagem[1]} alt={carro.nome} />,
         // <img src={carro.imagem[2]} alt={carro.nome} />,
         // <img src={carro.imagem[3]} alt={carro.nome} />
       // </section>
    



     // <footer>
      //  <Footer />
     // </footer>
   // </div>
 // )

//}