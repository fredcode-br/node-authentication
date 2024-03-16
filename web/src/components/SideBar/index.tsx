import { useEffect, useState } from "react";

import SideLink from "./SideLink";
import nodeImg from "../../assets/img/node.png";

interface Props {
  expanded: boolean;
}

function SideBar({expanded}: Props) {
  const [activeLink, setActiveLink] = useState(""); 
  
  useEffect(() => {
    const url: string = window.location.pathname;
    const valorAposBarra: string = url.split("/")[1];
    setActiveLink(valorAposBarra);
  }, []);

  const handleSetActiveLink = (to: string) => {
    setActiveLink(to);
  };

  return (
    <div
      className={`${
        expanded ? "w-full" : "w-0 p-0"
      } pt-10 md:pt-4 md:w-64 flex-shrink-0 bg-zinc-900 p-4 transition-all duration-300 overflow-hidden`}
    >

      <div className="flex items-center justify-center h-16 text-white px-6">

          <img 
            src={nodeImg} 
            alt="Text written node with the Node.js logo in place of the letter 'o'" 
            className="w-auto h-8 md:h-12"
          /> 
      </div>
      <nav className="flex-1 mt-5 px-2">
        <SideLink 
          text="Dashboard"
          to="dashboard"
          iconName="home"
          activeLink={activeLink}
          setActiveLink={handleSetActiveLink}
        />
      </nav>
    </div>
  );
}

export default SideBar;
