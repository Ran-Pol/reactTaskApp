const Button = ({ deleteItem }) => (
  <button
    className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
    onClick={deleteItem}
  >
    Delete
  </button>
);

export default Button;
