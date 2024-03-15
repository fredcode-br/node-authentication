interface Props {
    id: string;
    type: "text" | "email" | "password";
    name: string;
    placeholder: string;
    customClass?: string;
}

function Input({id, type, name, placeholder, customClass}: Props) {
    return (
        <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${customClass}`}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input;