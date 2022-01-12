import Card from "../Card/Card";
import Heading from "../Card/Heading";
import Image from "../Card/Image";
import SiteContainer from "../UI/SiteContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NotFound as NotFoundUI } from "../UI/NotFound";
import CardBody from "../Card/CardBody";
import { Actions } from "../Card/Actions";
import { BookmarkIcon, ChatIcon, HeartIcon } from "@heroicons/react/outline";
import Likes from "../Card/Likes";
import { Body } from "../Card/Body";
import { Datetime } from "../Card/Datetime";
import CommentForm from "../Card/CommentForm";
import Comment from "../Card/Comment";

const Photo = () => {
  let { photoId } = useParams();
  const [photo, setPhoto] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const photo = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/photos/${photoId}`
      );

      if (photo.data.length > 0) {
        setPhoto(photo.data[0]);
      }
    })();

    (async () => {
      const comments = await axios.get(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/photos/${photoId}/comments`
      );

      setComments(comments.data);
    })();
  }, []);

  return (
    <SiteContainer className="flex flex-col items-center gap-2">
      {photo ? (
        <Card>
          <Heading name="cat_person" href="#nowhere" />
          <Image alt={photo.body} image={photo.path} />

          <CardBody>
            <Actions>
              <HeartIcon className="w-8 h-8" />
              <ChatIcon className="w-8 h-8" />
              <BookmarkIcon className="w-8 h-8 ml-auto" />
            </Actions>

            <Likes likes={200} />

            <Body name={"cat_person"} body={photo.body} />

            {comments.length > 0 &&
              comments.map((comment) => (
                <Comment
                  name={comment.username}
                  body={comment.body}
                  profile="#"
                />
              ))}
            <Datetime id={photo.id} time={photo.created_at} />

            <CommentForm />
          </CardBody>
        </Card>
      ) : (
        <NotFoundUI />
      )}
    </SiteContainer>
  );
};
export default Photo;
