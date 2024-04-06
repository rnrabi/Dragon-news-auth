import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../authContext/ContextApi";

const LoginGoogle = () => {
    const { googleSignIn , githubSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error.message)
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error.message)
            })
    }



    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Login With</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full font-bold mb-4"> <FaGoogle></FaGoogle> Login With Google</button>

            <button onClick={handleGithubSignIn} className="btn btn-outline w-full font-bold mb-4"> <FaGithub></FaGithub> Login With Github</button>
        </div>
    );
};

export default LoginGoogle;