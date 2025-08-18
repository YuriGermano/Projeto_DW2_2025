
export function mudarImagem(direcao, imgIndex, totalImagens) {
    if (direcao === "prev") {
      return (imgIndex - 1 + totalImagens) % totalImagens;
    } else {
      return (imgIndex + 1) % totalImagens;
    }
  }
  
  export function calcularPreco(carro, opcao) {
    return carro.preco[opcao];
  }
  