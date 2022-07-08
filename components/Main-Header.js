import { FaFacebook, FaSearch, FaAlignJustify } from 'react-icons/fa';

import './Main-Header.css';

export default function() 
{
    return (
      <header className="header">
        <div className="header-left">
          <div className="logoFb-principal"> 
            <FaFacebook/>
          </div>
          <div className="searchFb-principal">
            <FaSearch/>
          </div>
          <div className="menuFb-principal">
            <FaAlignJustify/>
          </div>
        </div>
        <div className="header-right">
          <div className="plusBtn-principal">
            +
          </div>

        </div>
      </header>
    );
}
