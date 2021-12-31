import useQuotes from "../useQuotes";

function Delete() {
  const { deleteAll } = useQuotes();

  const delAll = () => {
    deleteAll();
  };

  return (
    <div>
      <button onClick={delAll()} type="button">
        Delete all quotes
      </button>
    </div>
  );
}

export default Delete;
