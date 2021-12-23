import { HeartIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-neutral-200 px-4 py-3 outline outline-1 outline-white mb-10">
      <div className="max-w-2xl mx-auto flex items-center gap-2">
        <h1 className="font-logo text-3xl pr-20">Instagram</h1>

        <form>
          <input
            type="text"
            className="border border-neutral-200 px-3 h-9 w-60 text-sm rounded bg-stone-50 focus:outline-black focus:outline-0 focus:border-neutral-200"
            placeholder="Hae"
          />
        </form>
        <div className="ml-auto flex gap-3">
          <HomeIcon className="w-6 h-6" />
          <HeartIcon className="w-6 h-6" />
          <UserCircleIcon className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
