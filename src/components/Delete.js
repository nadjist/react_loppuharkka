import useQuotes from "../useQuotes";

function Delete() {
  const { deleteAll } = useQuotes();

  return (
    <div>
      <button
        onClick={deleteAll}
        type="button"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 w-40 border border-gray-400 rounded shadow"
      >
        Delete all quotes
      </button>
    </div>
  );
}

export default Delete;
