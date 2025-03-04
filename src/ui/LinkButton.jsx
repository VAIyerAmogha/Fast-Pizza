import { Link, useNavigate } from "react-router-dom";
function LinkButton({ children, to }) {
  const classname = "text-sm text-blue-500 hover:text-blue-800 hover:underline";
  const navigate = useNavigate();
  if (to === -1) {
    return (
      <button onClick={() => navigate(-1)} className={classname}>
        {children}
      </button>
    );
  }
  return (
    <Link to="/menu" className={classname}>
      {children}
    </Link>
  );
}

export default LinkButton;
