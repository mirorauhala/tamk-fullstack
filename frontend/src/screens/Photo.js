import Card from "../Card/Card";
import Heading from "../Card/Heading";
import Image from "../Card/Image";
import Footer from "../Card/Footer";
import Comments from "../Card/Comments";
import Comment from "../Card/Comment";
import SiteContainer from "../UI/SiteContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NotFound as NotFoundUI } from "../UI/NotFound";

const Photo = () => {
  let { photoId } = useParams();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const photo = await axios.get(
        process.env.REACT_APP_BACKEND_ENDPOINT + "/api/photos/" + photoId
      );

      if (photo.data.length > 0) {
        setPhoto(photo.data[0]);
      }
    })();
  }, []);

  return (
    <SiteContainer className="flex flex-col items-center gap-2">
      {photo ? (
        <Card>
          <Heading name="cat_person" href="#nowhere" />
          <Image alt={photo.body} image={photo.path} />

          <Footer likes={300} name={"cat_person"} body={photo.body}>
            <Comments>{/*<Comment body={"cute cat"} />*/}</Comments>
          </Footer>
        </Card>
      ) : (
        <NotFoundUI />
      )}
    </SiteContainer>
  );
};
export default Photo;
