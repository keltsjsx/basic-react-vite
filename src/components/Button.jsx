import clsx from 'clsx';


const Button = ({ className = 'bg-blue-600', children, text, type = 'button', ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 bg-blue-600 text-white px-2 py-2 rounded flex items-center gap-x-2'
      )}
    >
      {text || children}
    </button>
  );
}

export default Button;