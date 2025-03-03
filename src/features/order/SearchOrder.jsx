import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setquery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
