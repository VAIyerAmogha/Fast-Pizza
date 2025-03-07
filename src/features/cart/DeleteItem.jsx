import { useDispatch } from "react-redux";
import Button from "../../ui/button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(deleteItem(pizzaId));
      }}
      type="small"
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
