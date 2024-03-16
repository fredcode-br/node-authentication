import { useContext, useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { AuthContext } from "../../../common/contexts/authContext";
import axios, { AxiosError } from "axios";

function Register() {
    const { post } = useApi();
    const { signed } = useContext(AuthContext);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (signed) {
            navigate("/");
        }
    }, [signed, navigate]);

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (password !== passwordConfirm) {
            setError("Passwords do not match");
            return;
        }

        try {
            await post('/user', { name, email, password });
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response && axiosError.response.data) {
                    const errorMessage = axiosError.response.data;
                    setError(String(errorMessage));
                } else {
                    setError('An error occurred while registering. Try again.');
                }
            } else {
                console.error('Unknown error:', error);
                setError('An unknown error occurred while registering. Try again.');
            }
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>, name: string) {
        if (name === "password") {
            setPassword(e.target.value);
        } else if (name === "password-c") {
            setPasswordConfirm(e.target.value);
        } else if (name === "name") {
            setName(e.target.value);
        } else {
            setEmail(e.target.value);
        }
    }

    return (
        <div className="flex flex-col items-center bg-zinc-300 shadow-md rounded w-full px-6 pt-6 pb-8 mb-4">
            <form className="w-full" onSubmit={handleRegister}>
                <h1 className="text-center text-2xl font-bold mb-4">Register</h1>
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-300" role="alert">
                        <span className="font-medium">{error}</span>
                    </div>
                )}
                <div className="mb-4">
                    <Label
                        customClass="text-gray-700 text-sm font-bold"
                        htmlFor="name"
                    >
                        name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        handleChange={(e) => handleChange(e, "name")}
                        placeholder="Enter your name"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <Label
                        customClass="text-gray-700 text-sm font-bold"
                        htmlFor="email"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        handleChange={(e) => handleChange(e, "email")}
                        placeholder="Enter a email"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <Label
                        customClass="text-gray-700 text-sm font-bold"
                        htmlFor="password"
                    >
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        handleChange={(e) => handleChange(e, "password")}
                        placeholder="Enter a password"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <Label
                        customClass="text-gray-700 text-sm font-bold"
                        htmlFor="password-c"
                    >
                        Repeat the Password
                    </Label>
                    <Input
                        id="password-c"
                        type="password"
                        name="password-c"
                        value={passwordConfirm}
                        handleChange={(e) => handleChange(e, "password-c")}
                        placeholder="Repeat the password"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center mb-4">
                    <Button type="submit">Register</Button>
                </div>
            </form>
            <p className="text-gray-700 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Log in here
                </Link>
            </p>
        </div>
    );
}

export default Register;
