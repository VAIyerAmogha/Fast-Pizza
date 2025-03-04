import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const clsName =
    "text-semibold duration-300ms inline-block rounded-full bg-yellow-400 px-4 py-3 uppercase text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to) {
    return (
      <Link to={to} className={clsName}>
        {children}
      </Link>
    );
  }
  return (
    <button className={clsName} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
