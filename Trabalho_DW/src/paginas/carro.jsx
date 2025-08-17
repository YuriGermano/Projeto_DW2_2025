import carro_info from "../componentes/carros_info.jsx";
import { useParams } from "react-router-dom";
import "../style/Carro.css";
import Footer from "../componentes/footer.jsx";

export default function Carros() {
  const { id } = useParams(); // Pega o id da URL
  const carro = carro_info.find((carro) => carro.id === parseInt(id)); // Encontra o carro com o id correspondente e transforma o id em número

  if (!carro) {
    return <h1>Carro não encontrado</h1>
  }

  return(
    <div>
      <section id="detalhes_carro">
          <h1>{carro.nome}</h1>
          <p>Potência: {carro.potencia}</p>
          <p>Transmissão: {carro.transmissao}</p>
          <p>Motor: {carro.motor}</p>
          <p>Aceleração: {carro.aceleracao}</p>
          <p>Tração: {carro.tracao}</p>
          <p>Preço: {carro.preco}</p>
          <img src={carro.imagem[1]} alt={carro.nome} />,
          <img src={carro.imagem[2]} alt={carro.nome} />,
          <img src={carro.imagem[3]} alt={carro.nome} />
        </section>

  

      <footer>
        <Footer />
      </footer>
    </div>
  )

}