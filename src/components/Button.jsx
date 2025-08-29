import './Button.css'

const Button = ({ name, setFunction, cssConfig }) => {
  return (
    <button
      className="button"
      style={{
        "--bg": cssConfig.backgroundColor,
        "--bg-hover": cssConfig.backgroundColorHover,
        "--c": cssConfig.color,
        "--c-hover": cssConfig.colorHover
      }}
      onClick={setFunction}
    >
      {name}
    </button>
  );
};

export default Button;
