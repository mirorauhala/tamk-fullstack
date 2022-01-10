import { BookmarkIcon, ChatIcon, HeartIcon } from "@heroicons/react/outline";

const Footer = ({ likes, name, body, children }) => {
  return (
    <footer className="bg-white py-4 px-5 rounded-b">
      <div className="flex gap-2 mb-2">
        <HeartIcon className="w-8 h-8" />
        <ChatIcon className="w-8 h-8" />

        <BookmarkIcon className="w-8 h-8 ml-auto" />
      </div>
      <p className="mb-2">
        <span className="font-bold">{likes}</span> tykkäystä
      </p>

      <p>
        <a href="#" className="font-bold">
          {name}
        </a>{" "}
        {body}
      </p>
      {children}
    </footer>
  );
};

export default Footer;
