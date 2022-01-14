const Image = ({ image, alt, ...rest }) => {
  return (
    <div className="aspect-square">
      <img
        loading="lazy"
        className="min-w-full"
        alt={alt}
        src={image}
        {...rest}
      />
    </div>
  );
};

export default Image;
