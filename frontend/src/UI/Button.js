const Button = ({ type, children, ...rest }) => {
  return (
    <button
      type={type}
      className="bg-white text-black px-4 py-2 rounded-xl font-medium border-2 disabled:bg-neutral-100 disabled:text-gray-600"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
