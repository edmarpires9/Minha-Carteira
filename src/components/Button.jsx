import './Button.css'

const Button = ({ name, setFunction, cssConfig }) => {
  return (
    <button
      className="button"
      style={{
        "--bg": cssConfig.backgroundColor,
        "--bg-hover": cssConfig.backgroundColorHover
      }}
      onClick={setFunction}
    >
      {name}
    </button>
  );
};

export default Button;
