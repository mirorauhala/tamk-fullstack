const Card = ({ children }) => {
  return (
    <article className="border border-neutral-200 rounded w-full">
      {children}
    </article>
  );
};

export default Card;
