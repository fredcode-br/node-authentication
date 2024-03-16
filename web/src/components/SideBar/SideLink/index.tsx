import { Link } from "react-router-dom";
import { HomeIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

interface Props {
    text: string;
    to: string;
    iconName: string;
    activeLink: string;
    setActiveLink: (to:string) => void;
}

function SideLink({text, to, iconName, activeLink, setActiveLink}: Props) {
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case "home":
                return <HomeIcon className="h-6 w-6 mr-3" />;
            case "dashboard":
                    return <Squares2X2Icon className="h-6 w-6 mr-3" />;
            default:
                return null;
        }
    };

    const handleClick = () => {
        setActiveLink(to);
      };

    return(
          <Link
          className={`flex items-center py-2 px-4 hover:text-green-600 cursor-pointer ${to === activeLink ? 'text-green-600' : 'text-white'}`}
          to={`/${to}`}
          onClick={handleClick}
        >
          {renderIcon(iconName)}
          {text}
        </Link>
    )
}

export default SideLink;