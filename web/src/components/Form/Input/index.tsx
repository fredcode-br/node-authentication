interface Props {
    id: string;
    type: "text" | "email" | "password";
    name: string;
    value: string;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>, name:string) => void;
    placeholder: string;
    customClass?: string;
}

function Input({id, type, name, value, handleChange, placeholder, customClass}: Props) {
    function handlingChange(e:React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault;
        handleChange(e, name);
    }

    return (
        <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${customClass}`}
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={handlingChange}
            placeholder={placeholder}
        />
    )
}

export default Input;