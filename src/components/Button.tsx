import React from "react";

interface Props {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  label,
  className,
  disabled = false,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={`px-4 py-2 rounded leading-tight text-gray-900 bg-gray-300 select-none focus:outline-none focus:shadow-outline ${!disabled &&
        "hover:text-black hover:bg-orange-400"} ${disabled &&
        "opacity-50"} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
