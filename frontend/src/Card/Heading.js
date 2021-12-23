const Heading = ({ name, profile }) => {
  return (
    <header className="py-4 px-5 bg-white rounded-t">
      <a href={profile} className="flex gap-2 font-medium items-center">
        <div className="w-10 h-10 bg-neutral-100 rounded-full" />
        {name}
      </a>
    </header>
  );
};

export default Heading;
