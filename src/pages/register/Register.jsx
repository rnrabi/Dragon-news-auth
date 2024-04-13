import { Link , useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/ContextApi";
import { sendEmailVerification } from "firebase/auth";



const Register = () => {
    const { signUpUser  } = useContext(AuthContext)
    const [error , setError] = useState('')
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo , email, password)
        
        if(password.length<6){
            setError('password must be 6 cherectar')
            return;
        }
        if(!/.*[A-Z].*/.test(password)){
            setError('please give at least one uppercase.')
            return;
        }
        if(!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~])/){
            setError('added a special character')
            return;
        }

        signUpUser(email, password)
            .then(result => {
                const signUpTime = result.user.metadata.creationTime
                const regiUser = {name , photo , email , password , signUpTime}
                // store user information in database of mongodb
                fetch('http://localhost:5000/register',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(regiUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })

                sendEmailVerification(result.user)
                .then(()=>{
                    // email verified korar por kn home page a jay na . ata support session a q korte hobe , 
                    // if(!result.user?.emailVerified){
                    //     alert('check your email and verify')
                    //     navigate('/register')
                    
                    // }
                    // else{
                    //     navigate('/')
                    // }
                  
                    navigate('/')
                    
                })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message.split('/')[1].replace(')' , ''))
            })
    }

    return (
        <div>
            <div className="max-w-screen-sm mx-auto min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Register now!</h1>
                    </div>


                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password" placeholder="password" className="input input-bordered" required />
                                    <p className="text-red-500">{error}</p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p> Have an account? <Link
                                to='/login' className="text-blue-500">Login</Link> </p>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;