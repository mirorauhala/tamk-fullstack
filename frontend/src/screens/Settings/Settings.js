import Nav from "../../Settings/Nav";
import SiteContainer from "../../UI/SiteContainer";
import { Route, Routes } from "react-router-dom";
import Password from "./Password";
import DeleteAccount from "./DeleteAccount";
import Profile from "./Profile";

const Settings = () => {
  return (
    <SiteContainer>
      <div className="bg-white border border-neutral-300 rounded flex">
        <Nav />
        <main className="px-4 py-5 w-full">
          <Routes>
            <Route path="" exact element={<Profile />} />
            <Route path="password" element={<Password />} />
            <Route path="delete-account" element={<DeleteAccount />} />
          </Routes>
        </main>
      </div>
    </SiteContainer>
  );
};
export default Settings;
