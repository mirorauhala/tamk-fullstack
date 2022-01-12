import Card from "../Card/Card";
import Heading from "../Card/Heading";
import Image from "../Card/Image";
import SiteContainer from "../UI/SiteContainer";

const Liked = () => {
  return (
    <SiteContainer className="flex flex-col items-center gap-2">
      <h1 className="text-left w-full mb-2 font-medium text-lg">Liked posts</h1>
      <Card>
        <Heading name="cat_person" href="#nowhere" />
        <Image
          alt="This is my cat steve"
          image="https://placekitten.com/1080/1080"
        />
      </Card>
    </SiteContainer>
  );
};
export default Liked;
