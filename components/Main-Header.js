import { FaFacebook, FaSearch, FaAlignJustify } from 'react-icons/fa';

import './Main-Header.css';

export default function() 
{
    return (
        <header className="header">
        <div className="header-left">
          <i className="iconLogoFb"><FaFacebook/></i>
          <div className="header-left--inputContainer">
            <i className="iconSearch"><FaSearch/></i>
            <input className="header-left--input"></input>
          </div>
        </div>
        <div className="header-center">

        </div>
        <div className="header-right">

        </div>
      </header>
    );
}