import { HeartIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-neutral-200 px-4 py-3 outline outline-1 outline-white mb-10">
      <div className="max-w-2xl mx-auto flex items-center gap-2">
        <Link to="/">
          <h1 className="font-logo text-3xl pr-20">Instagram</h1>
        </Link>

        <form>
          <input
            type="text"
            className="border border-neutral-200 px-3 h-9 w-60 text-sm rounded bg-stone-50 focus:outline-black focus:outline-0 focus:border-neutral-200"
            placeholder="Hae"
          />
        </form>
        <div className="ml-auto flex gap-3">
          <NavLink to={"/"}>
            <HomeIcon className="w-6 h-6" />
          </NavLink>

          <NavLink to={"/liked"}>
            <HeartIcon className="w-6 h-6" />
          </NavLink>

          <NavLink to={"/settings"}>
            <UserCircleIcon className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
