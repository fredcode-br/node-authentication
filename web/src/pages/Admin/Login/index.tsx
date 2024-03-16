import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../common/contexts/authContext";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { Link } from "react-router-dom";

function Login() {
    const { signed, error, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate(); 
    
    useEffect(() => {
        if (signed) {
            navigate("/");
        }
    }, [signed, navigate]);

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await signIn({ email, password });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>, name: string) {
        if (name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    return (
        <div className="flex flex-col items-center bg-zinc-300 shadow-md rounded w-full px-6 pt-6 pb-8 mb-4">
            <form className="w-full" onSubmit={handleLogin}>
                <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-300" role="alert">
                        <span className="font-medium">{error}</span>
                    </div>
                )}
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
                        placeholder="Enter your email address"
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
                        placeholder="Enter your password"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center mb-4">
                    <Button type="submit">Sign In</Button>
                </div>
            </form>
            <p className="text-gray-700 text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                    Register here
                </Link>
            </p>
        </div>
    );
}

export default Login;
