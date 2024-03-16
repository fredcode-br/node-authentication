import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <section className="text-center">
                    <h2 className="text-xl font-semibold mb-3">Welcome to the home page!</h2>
                    <Link
                        to="/login"
                        className=" bg-blue-600 text-white rounded px-4 py-2"
                    >
                        Sign In
                    </Link>
                </section>
        </div>
    );
}

export default Home;
