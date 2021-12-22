const Heading = ({ name, profile }) => {
  return (
    <header className="py-4 px-5 bg-white rounded-t">
      <a href={profile} className="block font-medium">
        {name}
      </a>
    </header>
  );
};

export default Heading;
