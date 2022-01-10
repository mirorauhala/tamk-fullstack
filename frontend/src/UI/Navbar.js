import {
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

import {
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/react/solid";

import { Link, NavLink } from "react-router-dom";
import SiteContainer from "./SiteContainer";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-neutral-200 px-4 py-3 outline outline-1 outline-white mb-10">
      <SiteContainer className="flex items-center gap-2">
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
            {({ isActive }) => (
              <>
                {isActive ? (
                  <HomeIconSolid className="w-6 h-6" />
                ) : (
                  <HomeIcon className="w-6 h-6" />
                )}
                <span className="sr-only">Home</span>
              </>
            )}
          </NavLink>

          <NavLink to={"/new"}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <PlusCircleIconSolid className="w-6 h-6" />
                ) : (
                  <PlusCircleIcon className="w-6 h-6" />
                )}
                <span className="sr-only">New post</span>
              </>
            )}
          </NavLink>

          <NavLink to={"/liked"}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <HeartIconSolid className="w-6 h-6" />
                ) : (
                  <HeartIcon className="w-6 h-6" />
                )}
                <span className="sr-only">Liked</span>
              </>
            )}
          </NavLink>

          <NavLink to={"/settings"}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <UserCircleIconSolid className="w-6 h-6" />
                ) : (
                  <UserCircleIcon className="w-6 h-6" />
                )}
                <span className="sr-only">Settings</span>
              </>
            )}
          </NavLink>
        </div>
      </SiteContainer>
    </nav>
  );
};
export default Navbar;
