import Footer from '../componentes/footer.jsx'
import '../style/index.css'


export default function Main() {
    return (
        <div id='div_mae'>
            <section id="pagina_inicial" 
            style={{backgroundImage: "url('/imagens/imgfundo.png')",
                backgroundSize: "cover",
                width: "1530px",
                marginLeft: "-10%", 
                marginTop: "-32px",

            }}>
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



            <section className="carros">
                <div className="grid_container" id='carros'>
                    <a href="paginas/veiculo_1.html"><div className="carro">
                        <div className="text">
                            <h1>FERRARI 458 ITALIA SPIDER</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (1).png" />
                    </div></a>

                    <a href="paginas/veiculo_2.html"><div className="carro">
                        <div className="text">
                            <h1>LAMBORGHINI AVENTADOR SVJ</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (4).png" />
                    </div></a>

                    <a href="paginas/veiculo_3.html"><div className="carro">
                        <div className="text">
                            <h1>MCLAREN 720s</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (8).jpeg" />
                    </div></a>

                    <a href="paginas/veiculo_4.html"><div className="carro">
                        <div className="text">
                            <h1>CADILLAC ESCALADE</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (3).jpg" />
                    </div></a>

                    <a href="paginas/veiculo_5.html"><div className="carro">
                        <div className="text">
                            <h1>DOGDE RAM 3500</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (2).jpeg" />
                    </div></a>

                    <a href="paginas/veiculo_6.html"><div className="carro">
                        <div className="text">
                            <h1>Mercedes-AMG GT 63</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (5).png" />
                    </div></a>

                    <a href="paginas/veiculo_7.html"><div className="carro">
                        <div className="text">
                            <h1>RANGER ROVER SPORT</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (10).jpg"/>
                    </div></a>

                    <a href="paginas/veiculo_8.html"><div className="carro">
                        <div className="text">
                            <h1>PORSCHE 911 GT3 RS</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (9).jpg"/>
                    </div></a>

                    <a href="paginas/veiculo_9.html"><div className="carro">
                        <div className="text">
                            <h1>BMW X7</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (7).jpg" alt=""/>
                    </div></a>
                </div>
            </section>


            
            <footer>
                <Footer />
            </footer>

        </div>
    )
}
