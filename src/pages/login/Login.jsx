import { Link } from "react-router-dom";
import Navber from "../../components/shared/Navber";
import { useContext, useRef } from "react";
import { AuthContext } from "../../authContext/ContextApi";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef()
    // console.log(emailRef.current.value)
    const { loginUser, resetPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                alert('check your email')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navber></Navber>
            <div className="max-w-screen-sm mx-auto min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    </div>


                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not have an account <Link
                                to='/register' className="text-blue-500">Register</Link> </p>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;