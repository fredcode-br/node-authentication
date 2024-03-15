import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Label from "../../../components/Form/Label";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="flex flex-col items-center bg-zinc-300 shadow-md rounded w-full px-6 pt-6 pb-8 mb-4">
            <form className="w-full">
                <h1 className="text-center text-2xl font-bold mb-4">Register</h1>
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
                        placeholder="Enter a password"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <Label
                        customClass="text-gray-700 text-sm font-bold"
                        htmlFor="password"
                    >
                        Repeat the Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Repeat the password"
                        customClass="text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center mb-4">
                    <Button type="submit">Sign In</Button>
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
