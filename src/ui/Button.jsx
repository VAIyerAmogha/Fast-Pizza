import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "text-semibold duration-300ms inline-block rounded-full bg-yellow-400 uppercase text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4  py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
