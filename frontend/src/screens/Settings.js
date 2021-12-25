import Nav from "../Settings/Nav";
import SiteContainer from "../UI/SiteContainer";

const Settings = () => {
  return (
    <SiteContainer>
      <div className="bg-white border border-neutral-300 rounded flex">
        <Nav />
        <main className="p-4">
          <h1 className="text-2xl font-medium">Edit Profile</h1>
        </main>
      </div>
    </SiteContainer>
  );
};
export default Settings;
