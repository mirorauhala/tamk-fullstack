const Image = ({ image, alt }) => {
  return (
    <div className="aspect-square">
      <img alt={alt} src={image} />
    </div>
  );
};

export default Image;
