import Welbert_bg from '../resources/wellisonPerfil.jpg';

import './Main-FeedPost.css';

export default function(props) 
{
    return (
    <section className="main-feedPosts">
        <div className="main-feedPostSingle">
          <div className="feedPost__profile">
            <img src={Welbert_bg} />
            <h3>{props.nome}<br/><span>{props.horario}</span></h3>
          </div>
          <div className="feedPost__content">
            <p>{props.conteudo}</p>
            <img src={Welbert_bg}/>
          </div>
        </div>
    </section>        
    );
}