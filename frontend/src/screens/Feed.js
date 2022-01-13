import Card from "../Card/Card";
import Heading from "../Card/Heading";
import Image from "../Card/Image";
import SiteContainer from "../UI/SiteContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Datetime } from "../Card/Datetime";
import { Link, useNavigate } from "react-router-dom";
import CommentForm from "../Card/CommentForm";
import { Actions } from "../Card/Actions";
import CardBody from "../Card/CardBody";
import Likes from "../Card/Likes";
import { Body } from "../Card/Body";
import { BookmarkIcon, ChatIcon, HeartIcon } from "@heroicons/react/outline";

const FeedCard = ({ id, username, body, path, time }) => {
  const navigate = useNavigate();

  const handleNewComment = async (comment) => {
    const commentData = {
      photo_id: id,
      body: comment,
    };

    await axios.post(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/comments`,
      commentData
    );

    navigate("/p/" + id);
  };

  return (
    <Card>
      <Heading name={username} href="#nowhere" />
      <Image alt={body} image={path} />

      <CardBody>
        <Actions>
          <HeartIcon className="w-8 h-8" />
          <Link to={"/p/" + id}>
            <span className={"sr-only"}>Add comment</span>
            <ChatIcon className="w-8 h-8" />
          </Link>
          <BookmarkIcon className="w-8 h-8 ml-auto" />
        </Actions>

        <Likes likes={200} />

        {body && <Body name={username} body={body} />}

        <Link to={"/p/" + id} className="px-5 block pt-0.5 text-neutral-500">
          Show all comments
        </Link>

        <Datetime id={id} time={time} />

        <CommentForm onSubmit={handleNewComment} />
      </CardBody>
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
    <SiteContainer className="flex flex-wrap items-center gap-2 pb-16">
      {photos.length === 0 && (
        <h1 className="w-full text-center font-medium">
          Be the first to post something.
        </h1>
      )}
      {photos.length > 0 &&
        photos.map((photo) => (
          <FeedCard
            key={photo.id}
            id={photo.id}
            username={photo.username}
            body={photo.body}
            path={photo.path}
            time={photo.created_at}
          />
        ))}
    </SiteContainer>
  );
};
export default Feed;
