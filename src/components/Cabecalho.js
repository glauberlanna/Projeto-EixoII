import '../styles.css'
import logo from '../img/logo.jpg'

function Cabecalho(){
    return(
        <div className="cabecalho">
        <a href={`/`}><img src={logo}/></a>

        <div className="navegacao">
        <div className="botao"><a href="">Categorias</a></div> 
        <div className="botao"><a href="">Ofertas do dia</a></div>
        <div className="botao"><a href="">Histórico</a></div>
        <div className="botao"><a href="">Mais procurados</a></div>
        <div className="botao"><a href={`/CrieSuaConta`}>Crie sua conta</a></div>
        <div className="botao"><a href="">Login</a></div>
        <div className="botao"><a href="">Contato</a></div>
        </div>

        </div>
    );
}

export default Cabecalho;