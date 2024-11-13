import { Link } from "react-router-dom";
import navBarLogo from "../assets/book-logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <Link to="/">
          <img
            alt="books-logo"
            src={navBarLogo}
            className="w-[100px] mx-8 my-4"
          />
        </Link>
        <div className="flex gap-20 my-10 mx-4">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link to="/AboutUs">
              <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                About
              </p>
            </Link>
            <Link to="/sign-up">
              <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                Sign-up
              </p>
            </Link>
            <Link to="/AboutUs">
              <p className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400 t">
                Login <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
