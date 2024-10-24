import Buttons from "./Buttons";
import NavName from "./NavName";

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
          <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <a className="text-3xl cursor-pointer" href="#">Recipe Calories</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><span className="bg-transparent hover:bg-transparent"><NavName name="Home"/></span></li>
          <li><span className="bg-transparent hover:bg-transparent"><NavName name="Recipes"/></span></li>
          <li><span className="bg-transparent hover:bg-transparent"><NavName name="About"/></span></li>
          <li><span className="bg-transparent hover:bg-transparent"><NavName name="Search"/></span></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Buttons name="Contact me"/>
      </div>
    </div>
  );
};

export default Header;
