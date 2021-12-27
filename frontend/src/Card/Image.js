const Image = ({ image, alt, ...rest }) => {
  return (
    <div className="aspect-square">
      <img alt={alt} src={image} {...rest} />
    </div>
  );
};

export default Image;
