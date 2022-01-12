const Comment = ({ name, body, profile }) => {
  return (
    <p className="px-5">
      <a href={profile} className="font-bold">
        {name}
      </a>{" "}
      {body}
    </p>
  );
};

export default Comment;
