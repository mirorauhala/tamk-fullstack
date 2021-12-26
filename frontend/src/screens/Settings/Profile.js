import Nav from "../../Settings/Nav";
import SiteContainer from "../../UI/SiteContainer";
import InputGroup from "../../UI/Settings/InputGroup";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import Feed from "../Feed";
import Liked from "../Liked";
import Password from "./Password";
import DeleteAccount from "./DeleteAccount";

const Profile = () => {
  return (
    <form className="flex flex-col">
      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="nameInput">
            Nimi
          </label>
        </div>
        <div className="w-3/4">
          <input type="text" id="nameInput" className="border w-2/3" />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="userNameInput">
            Käyttäjänimi
          </label>
        </div>
        <div className="w-3/4">
          <input type="text" id="userNameInput" className="border w-2/3" />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="bioInput">
            Elämänkerta
          </label>
        </div>
        <div className="w-3/4">
          <textarea id="bioInput" className="border w-2/3" />
        </div>
      </InputGroup>
    </form>
  );
};
export default Profile;
