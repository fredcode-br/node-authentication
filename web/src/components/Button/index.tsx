interface Props {
    children: React.ReactNode;
    type: "button" | "submit";
    customClass?: string;
    handleClick?: () => void;
}

function Button({children, type, customClass, handleClick}: Props){
    const handlingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (handleClick) {
            handleClick();
        }
    }
    

    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${customClass}`}
            type={type}
            onClick={handlingClick}
        >
            {children}
        </button>
    )
}

export default Button;