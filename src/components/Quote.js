import useQuotes from "../useQuotes";

const Quote = ({ quote }) => {
  const { deleteQuote, filteredQuotes } = useQuotes();

  const deleteClick = () => {
    deleteQuote({ quote });
  };
  return (
    <div className="flex justify-between items-center mb-5 border-2 px-2 py-2 h-20">
      <div className="flex">{quote}</div>
      <div className="flex">
        {filteredQuotes.length === 0 ? (
          <span></span>
        ) : (
          <button
            onClick={deleteClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 h-10 border border-red-700 rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Quote;
