import InputGroup from "../../UI/Settings/InputGroup";
import { UserContext } from "../../UserContext";
import { useContext, useEffect } from "react";

const Profile = () => {
  const context = useContext(UserContext);

  return (
    <form className="flex flex-col">
      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="firstNameInput">
            First Name
          </label>
        </div>
        <div className="w-3/4">
          <input
            type="text"
            id="firstNameInput"
            className="border w-2/3"
            defaultValue={context.user.first_name}
          />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="lastNameInput">
            Last Name
          </label>
        </div>
        <div className="w-3/4">
          <input
            type="text"
            id="lastNameInput"
            className="border w-2/3"
            defaultValue={context.user.last_name}
          />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="userNameInput">
            Username
          </label>
        </div>
        <div className="w-3/4">
          <input
            type="text"
            id="userNameInput"
            className="border w-2/3"
            defaultValue={context.user.username}
          />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="bioInput">
            Bio
          </label>
        </div>
        <div className="w-3/4">
          <textarea
            id="bioInput"
            className="border w-2/3"
            defaultValue={context.user.bio}
          />
        </div>
      </InputGroup>
    </form>
  );
};
export default Profile;
