import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  onClick
}) => {
  // Size classes
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${shape}
        ${className}
        bg-blue-500 hover:bg-blue-600 
        text-white font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400
      `}
    >
      {title}
    </button>
  )
}

export default Button;
