import Footer from '../componentes/footer.jsx'
import '../style/index.css'
import { Link } from "react-router-dom";
import carro_info from '../componentes/carros_info.jsx';


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


            {carro_info.map((carros) => {      {/*  Percorre o array dos carros, mapeando eles, percorre e renderiza cada item da lista*/}
            <section className="carros">
                <div className="grid_container" id='carros'>
                    <Link to={`/carro/${carros.id}`}>        {/* Cria o Link personalizado para cada carro */}
                        <div key={carros.id} className="carro">         {/*Key identifica cada item*/}
                            <div className="text">
                                <h1>FERRARI 458 ITALIA SPIDER</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (1).png" />
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro">
                            <div className="text">
                                <h1>LAMBORGHINI AVENTADOR SVJ</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (4).png" />
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro"> 
                            <div className="text">
                                <h1>MCLAREN 720s</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (8).jpeg" />
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro">
                            <div className="text">
                                <h1>CADILLAC ESCALADE</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (3).jpg" />
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro">
                            <div className="text">
                                <h1>DOGDE RAM 3500</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (2).jpeg" />
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                    <div key={carros.id} className="carro">
                        <div className="text">
                            <h1>Mercedes-AMG GT 63</h1>
                            <p>Taxa Diária: R$ 1000.00</p>
                            <p>Preço Especial: R$ 800.00</p>
                        </div>
                        <img src="/imagens/image (5).png" />
                    </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro">
                            <div className="text">
                                <h1>RANGER ROVER SPORT</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (10).jpg"/>
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro">
                            <div className="text">
                                <h1>PORSCHE 911 GT3 RS</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (9).jpg"/>
                        </div>
                    </Link>

                    <Link to={`/carro/${carros.id}`}>
                        <div key={carros.id} className="carro">
                            <div className="text">
                                <h1>BMW X7</h1>
                                <p>Taxa Diária: R$ 1000.00</p>
                                <p>Preço Especial: R$ 800.00</p>
                            </div>
                            <img src="/imagens/image (7).jpg" alt=""/>
                        </div>
                    </Link>
                </div>
                
            </section>})};


            
            <footer>
                <Footer />
            </footer>

        </div>
    )
}
