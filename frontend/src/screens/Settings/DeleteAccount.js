import Nav from "../../Settings/Nav";
import SiteContainer from "../../UI/SiteContainer";
import InputGroup from "../../UI/Settings/InputGroup";

const DeleteAccount = () => {
  return (
    <form className="flex flex-col">
      <h1 className="text-xl mb-3 font-medium">Delete account</h1>
      <p className="mb-5">
        Are you sure you want to delete your account? This action cannot be
        undone.
      </p>
      <p>
        <button className="border-2 border-red-600 text-red font-bold text-red-600 hover:bg-red-100 py-2 px-4 rounded-lg">
          Yes, delete my account
        </button>
      </p>
    </form>
  );
};
export default DeleteAccount;
