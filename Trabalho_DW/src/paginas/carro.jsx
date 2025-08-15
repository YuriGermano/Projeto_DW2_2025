import carro_info from "../componentes/carros_info.jsx";
import { UseParams } from "react-router-dom";

const carros = carro_info[0];

export default function Main() {
  return(
    <div>
      <img src={carros.imagem[1]} alt="" />
    </div>
  )
}