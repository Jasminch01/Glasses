import { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLogIn, signInEmailPassword, githubLogIn } = useContext(AuthContext);

  const navigate = useNavigate()

  const loginHandler = (social) => {
    social()
    .then((res) => {
      console.log(res);
      navigate('/products')
    })
    .catch(error => {
      console.log(error)
    })
  };

  const logInEmailPasswordHandler = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInEmailPassword(email, password)
    .then(res => {
      console.log(res)
      navigate('/products')

    })
    .catch(error => {
      console.log(error)
    })
  }




  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={logInEmailPasswordHandler } className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit"  className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
          <div className="mb-5 text-center">
            <p className="font-medium">Log in with social</p>
            <div className="space-x-3 mt-3">
              <button onClick={() => loginHandler(githubLogIn)} className="text-2xl">
                <FaGithub></FaGithub>{" "}
              </button>
              <button onClick={() => loginHandler(googleLogIn)} className="text-2xl">
                <FcGoogle></FcGoogle>
              </button>
              <button className="text-2xl">
                <FaFacebook></FaFacebook>{" "}
              </button>
              <button className="text-2xl">
                <FaSquareXTwitter></FaSquareXTwitter>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
