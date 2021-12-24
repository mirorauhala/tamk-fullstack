import Nav from "../Settings/Nav";

const Settings = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-neutral-300 rounded flex">
        <Nav />
        <main className="p-4">
          <h1 className="text-2xl font-medium">Edit Profile</h1>
        </main>
      </div>
    </div>
  );
};
export default Settings;
