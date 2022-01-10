import Card from "../Card/Card";
import Heading from "../Card/Heading";
import Image from "../Card/Image";
import Footer from "../Card/Footer";
import Comments from "../Card/Comments";
import Comment from "../Card/Comment";
import SiteContainer from "../UI/SiteContainer";
import { useEffect, useState } from "react";
import axios from "axios";

const FeedCard = ({ body, path }) => {
  return (
    <Card>
      <Heading name="cat_person" href="#nowhere" />
      <Image alt={body} image={path} />

      <Footer likes={300} name={"cat_person"} body={body}>
        <Comments>
          <Comment name="asd" body="testing" />
        </Comments>
      </Footer>
    </Card>
  );
};

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_ENDPOINT + "/api/photos"
      );

      console.log(response.data);
      setPhotos(response.data);
    })();
  }, []);

  return (
    <SiteContainer className="flex flex-wrap items-center gap-2">
      {photos.map((photo) => (
        <FeedCard key={photo.id} body={photo.body} path={photo.path} />
      ))}
    </SiteContainer>
  );
};
export default Feed;
