import { useContext } from "react";
import Button from "../../../components/Button";
import { AuthContext } from "../../../common/contexts/authContext";

function Dashboard() {
    const { signOut } = useContext(AuthContext);

    async function logout(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        await signOut();
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-bold text-center mb-4">Welcome to Dashboard!</h1>
            <Button
                type="button"
                handleClick={logout}
            >
                Logout
            </Button>
        </div>
    )
}

export default Dashboard;