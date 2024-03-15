import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex flex-col items-center bg-zinc-300 shadow-md rounded w-full px-6 pt-6 pb-8 mb-4">
            <form className="w-full">
                <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
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
                        placeholder="Type your email address"
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
                        placeholder="Type your password"
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
