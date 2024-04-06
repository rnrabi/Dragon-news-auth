import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginGoogle = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Login With</h2>
            <button className="btn btn-outline w-full font-bold mb-4"> <FaGoogle></FaGoogle> Login With Google</button>
            <button className="btn btn-outline w-full font-bold mb-4"> <FaGithub></FaGithub> Login With Github</button>
        </div>
    );
};

export default LoginGoogle;