import '../style/Footer.css'

export default function Footer(){
   return(
        <footer>
            <hr/>
            <div id="div_principal">
                <div class="escrita">
                    <p><strong>CHAVE</strong> NA MÃO</p>
                    <p>ESTRADA NO <strong>CORAÇÃO</strong></p>
                </div>
                <div class="escrita2">
                    <p><strong>SOBRE NÓS</strong></p>
                    <p>YURI TEDESCO GERMANO</p>
                    <p>EMANUEL BAUERMANN DA SILVA MARTINS</p>
                    <p>FILIPE CASADEI</p>
                    <p>LAURA LEANDRA FACCIN</p>
                    <p>BIANCA GABRIELA GOLFE</p>
                </div>
        
                <div id="seguir">
                    <p id="siga">Siga-nos</p>
                    <div class="redes">
                        <img src="/imagens/instagram.png" alt=""/>
                        <img src="/imagens/facebook.png" alt=""/>
                        <img src="/imagens/whatsapp.png" alt=""/>
                        <img src="/imagens/localizacao.png" alt=""/>
                    </div>
                </div>
                
                <div id="imagem">
                    <img src="/imagens/logo.png" alt=""/>
                </div>
            </div>
            <hr/>
        </footer>
        )
    }