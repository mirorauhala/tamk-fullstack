import Card from "../Card/Card";
import Heading from "../Card/Heading";
import Image from "../Card/Image";
import Footer from "../Card/Footer";
import Comments from "../Card/Comments";
import Comment from "../Card/Comment";

const Feed = () => {
  return (
    <div className="max-w-2xl mx-auto flex items-center gap-2">
      <Card>
        <Heading name="cat_person" href="#" />
        <Image
          alt="This is my cat steve"
          image="https://placekitten.com/1080/1080"
        />

        <Footer likes={300} name={"cat_person"} body="This is my cat steve">
          <Comments>
            <Comment>cute cat</Comment>
          </Comments>
        </Footer>
      </Card>
    </div>
  );
};
export default Feed;
