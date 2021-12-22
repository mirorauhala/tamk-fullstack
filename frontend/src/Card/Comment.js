const Comment = ({ name, body, profile }) => {
  return (
    <p>
      <a href={profile} className="font-bold">
        {name}
      </a>{" "}
      {body}
    </p>
  );
};

export default Comment;
