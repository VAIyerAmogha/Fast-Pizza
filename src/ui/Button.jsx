import { Link } from "react-router-dom";

export function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-semibold text-sm duration-300ms inline-block rounded-full bg-yellow-400 uppercase text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4  py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "text-semibold text-sm duration-300ms inline-block rounded-full border-2 border-stone-300 uppercase text-stone-400 transition-colors hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed  px-4  py-2.5 sm:px-6 sm:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
