import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../common/contexts/authContext";
import Button from "../../../components/Button";

function Home() {
    const { signed, signOut } = useContext(AuthContext);
    
    async function logout(e: React.MouseEvent<HTMLElement>){
        e.preventDefault();
        await signOut();
    }
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <section className="text-center">
                    <h2 className="text-xl font-semibold mb-3">Welcome to the home page!</h2>
                    {signed ?
                        <Button
                            type="button"
                            handleClick={logout}
                        >
                            Logout
                        </Button>
                        :
                        <Link
                            to="/login"
                            className=" bg-blue-600 text-white rounded px-4 py-2"
                        >
                            Sign In
                        </Link>
                    }
                </section>
        </div>
    );
}

export default Home;
