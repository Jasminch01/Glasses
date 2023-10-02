import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  // const logOutHandler = () => {
  //   logOut()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const navlinks = ['home', 'projucts', 'about', 'login', 'registration']
  // const navigation = navlinks.map((navlink, index) => {
  //     return  <>
  //         <NavLink key={index}>{navlink}</NavLink>
  //     </>
  // })
  const navLinks = (
    <>
      <NavLink to="/" className="mr-3">
        Home
      </NavLink>
      <NavLink to="/products" className="mr-3">
        products
      </NavLink>
      <NavLink to="/about" className="mr-3">
        About
      </NavLink>
      <NavLink to="/login" className="mr-3">
        Login
      </NavLink>
      <NavLink to="/registration" className="mr-3">
        Registration
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Glasses</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <a onClick={logOut} className="btn">
              LogOut
            </a>
          </div>
        ) : (
          <div className="navbar-end">
            <a>LogIN</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
