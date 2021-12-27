import { Link } from "react-router-dom";
import Image from "../Card/Image";
import SiteContainer from "../UI/SiteContainer";

const ImageContainer = ({ children }) => <div className="">{children}</div>;

const Profile = () => {
  const images = [
    "https://placekitten.com/1080/1080?",
    "https://placekitten.com/1080/1080?",
    "https://placekitten.com/1080/1080?",
    "https://placekitten.com/1080/1080?",
    "https://placekitten.com/1080/1080?",
    "https://placekitten.com/1080/1080?",
    "https://placekitten.com/1080/1080?",
  ];

  return (
    <SiteContainer>
      <header className="grid grid-cols-4 grid-rows-1 pb-10 mb-10 border-b border-neutral-200">
        <Image
          className="rounded-full"
          image="https://placekitten.com/1080/1080"
        />
        <div className="col-span-3 pl-10">
          <div className="flex gap-8 mb-4">
            <h1 className="text-3xl">cat_person</h1>
            <button className="px-6 text-white font-bold rounded bg-blue-500">
              Follow
            </button>
          </div>
          <ul className="flex gap-10 mb-5">
            <li>
              <span className="font-bold">100</span> posts
            </li>
            <li>
              <span className="font-bold">100</span> followers
            </li>
            <li>
              <span className="font-bold">100</span> following
            </li>
          </ul>

          <p>i like cats. you like cats. here we are.</p>
        </div>
      </header>

      <main className="grid gap-4 grid-cols-3 auto-rows-auto">
        {images.map((image, index) => (
          <Link key={index} to="/">
            <ImageContainer>
              <Image image={image} />
            </ImageContainer>
          </Link>
        ))}
      </main>
    </SiteContainer>
  );
};
export default Profile;
