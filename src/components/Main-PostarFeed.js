import { AiFillVideoCamera, AiFillPicture } from 'react-icons/ai';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';

import Welbert_bg from '../resources/wellisonPerfil.jpg';

import './Main-PostarFeed.css';

export default function()
{
    return (
        <section className="main-postarFeed">
            <div className="main-feedForm">
                <img src={Welbert_bg}/>
                <input type="text" placeholder='No que você está pensando?'/>
            </div>
            <div className="main-feedFormIcons">
                <div className="feedFormIconSingle -video">
                    <AiFillVideoCamera/>
                <span>Vídeo ao vivo</span>
                </div>
                <div className="feedFormIconSingle -foto">
                    <AiFillPicture/>
                <span>Foto/Vídeo</span>
                </div>
                <div className="feedFormIconSingle -sentimento">
                    <BsFillEmojiSunglassesFill/>
                <span>Sentimento/atividade</span>
                </div>
            </div>
        </section>                
    );
}
