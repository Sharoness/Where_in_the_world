import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode, useState } from 'react';

interface ILayoutInterface {
  children: React.ReactNode;
}


export default function Layout({children}: ILayoutInterface) {
    const [theme, setTheme] = useState("light-mode");
  
    const handleClick = () => {
        if (theme === "light-mode") {
            setTheme("dark-mode");
        } else {
            setTheme("light-mode");
        }
    };
    
  return (
    <div className={theme}>
      <header className="header elements">
          <div className="title">Where in the world?</div>
          <button onClick={handleClick}>
              <FontAwesomeIcon icon={faMoon} />
              Dark mode
          </button>
      </header>
      <div>
        {children}
      </div>
    </div>
    )
}
