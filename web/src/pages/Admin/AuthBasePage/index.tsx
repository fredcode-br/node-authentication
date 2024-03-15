import { Outlet } from "react-router-dom";
import nodeImg from "../../../assets/img/node.png";

function AuthBasePage() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:flex w-7/12 items-center justify-center bg-zinc-900 px-16">
                <img
                    src={nodeImg}
                    alt="Text written node with the Node.js logo in place of the letter 'o'"
                    className="w-full md:max-w-md h-auto"
                />
            </div>
            <div className="w-full h-full md:w-5/12 bg-zinc-700 flex items-center justify-center px-6 md>px-10 lg:px-20">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthBasePage;
