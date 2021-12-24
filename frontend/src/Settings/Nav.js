import { NavLink } from "react-router-dom";

const Item = ({ to, children }) => {
  const getActiveClasses = ({ isActive }) => {
    return `block py-4 px-6 border-l-2 border-white hover:border-neutral-300 focus:border-neutral-300 ${
      isActive &&
      "font-medium border-black hover:border-black focus:border-black"
    }`;
  };

  return (
    <li>
      <NavLink className={getActiveClasses} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className="w-52 border-r border-neutral-300">
      <ul className="first:rounded-tl last:rounded-bl">
        <Item to="/settings">Edit Profile</Item>
        <Item to="/settings/password">Password</Item>
        <Item to="/settings/delete-account">Delete account</Item>
      </ul>
    </nav>
  );
};

export default Nav;
