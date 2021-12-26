import Nav from "../../Settings/Nav";
import SiteContainer from "../../UI/SiteContainer";
import InputGroup from "../../UI/Settings/InputGroup";

const Password = () => {
  return (
    <form className="flex flex-col">
      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="passwordInput">
            Nykyinen salasana
          </label>
        </div>
        <div className="w-3/4">
          <input type="password" id="passwordInput" className="border w-2/3" />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label className="block w-full text-right" htmlFor="newPasswordInput">
            Uusi salasana
          </label>
        </div>
        <div className="w-3/4">
          <input type="text" id="newPasswordInput" className="border w-2/3" />
        </div>
      </InputGroup>

      <InputGroup>
        <div className="w-1/4 pr-3">
          <label
            className="block w-full text-right"
            htmlFor="confirmNewPasswordInput"
          >
            Vahvista salasana
          </label>
        </div>
        <div className="w-3/4">
          <textarea id="confirmNewPasswordInput" className="border w-2/3" />
        </div>
      </InputGroup>
    </form>
  );
};
export default Password;
