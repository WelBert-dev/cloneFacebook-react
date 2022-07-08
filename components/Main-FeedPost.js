import Welbert_bg from '../resources/wellisonPerfil.jpg';

import './Main-FeedPost.css';

export default function() 
{
    return (
    <section className="main-feedPosts">
        <div className="main-feedPostSingle">
          <div className="feedPost__profile">
            <img src={Welbert_bg} />
            <h3>Wellison Bertelli <br/><span>4h atrás</span></h3>
          </div>
          <div className="feedPost__content">
            <p>Linguagens: Python, C#, JavaScript<br/>Marcação: HTML5, CSS3<br/>Banco de dados: MySQL e SQL Server</p>
            <img src={Welbert_bg}/>
          </div>
        </div>
    </section>        
    );
}