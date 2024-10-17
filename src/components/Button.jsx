const Button = ({
  label,
  iconURL,
  bgColor,
  borderColor,
  textColor,
  width,
  marginPaddings
}) => {

  return (
    <button
      className={`flex justify-center items-center gap-2 border-2 font-montserrat text-lg leading-none
        ${marginPaddings ? `${marginPaddings}` : "m-0 px-7 py-4"} 
        ${bgColor ? `${bgColor}` : "bg-coral-red dark-bg-button"} 
        ${borderColor ? `${borderColor}` : "border-coral-red dark-border"}
        ${textColor ? `${textColor}` : "text-white"}
        ${width ? `${width}` : "w-max"}
        rounded-full `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
          alt={`{iconURL}-icon`}
        />
      )}
    </button>
  );
};

export default Button;
