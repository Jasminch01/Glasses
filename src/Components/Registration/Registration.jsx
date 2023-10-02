import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const {createUserEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate()



  const createUserWithEmailAndPassword = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length > 6) {
      toast.error('password should have 6 character')
    }else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(password)){
      toast.error('password should have at last uppercase charecter, lowercase charecter, or a digit')
    }

    createUserEmailPassword(email, password)
    .then((res => {
      console.log(res)
      navigate('/product')

    }))
    .catch(error => {
      console.log(error)
    })
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <form onSubmit={createUserWithEmailAndPassword}  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
