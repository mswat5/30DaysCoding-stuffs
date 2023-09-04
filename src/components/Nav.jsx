const MenuItems = () => {
  return (
    <>
      <li > 
        <a>About</a>
      </li>
      <li> <a>Videos</a>
 </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Roadmaps</a>
      </li>
    </>
  );
};
const Nav = () => {
  return (
    <div className="navbar bg-base-100 max-w-screen m-auto shadow-2xl fixed top-0 w-full z-50  ">
      <div className="navbar-start md:mr-auto sticky">
        <a
          href="https://30dayscoding.com"
          className="btn btn-ghost normal-case text-xl"
        >
          <img src="logo" alt="" />{" "}
          <span className="color-teal">CoDEtheCoDE</span>
        </a>
      </div>
      <div className="navbar-end ml-auto">
        <div className="dropdown dropdown-end">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[150px] "
          >
            <MenuItems />
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuItems />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
