const Image = ({ image, alt, ...rest }) => {
  return (
    <div className="aspect-square">
      <img loading="lazy" alt={alt} src={image} {...rest} />
    </div>
  );
};

export default Image;
