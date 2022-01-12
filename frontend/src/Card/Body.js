const Body = ({ name, body }) => {
  return (
    <p className="px-5">
      <a href="#" className="font-bold">
        {name}
      </a>{" "}
      {body}
    </p>
  );
};

export { Body };
