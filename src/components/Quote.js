import useQuotes from "../useQuotes";

const Quote = ({ quote }) => {
  const { deleteQuote } = useQuotes();

  const deleteClick = () => {
    deleteQuote({quote});
  };
  return (
    <div style={{ border: "1px solid gray" }}>
      <div>{quote}</div>
      <div className="flex space-x-3">
        <input
          type="button"
          value="delete"
          className="btn btn-red"
          onClick={deleteClick}
        />
      </div>
    </div>
  );
};

export default Quote;
