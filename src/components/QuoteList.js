import useQuotes from "../useQuotes";
import Quote from "./Quote";

const QuoteList = () => {
  const { filteredQuotes } = useQuotes();

  return (
    <div className="flex-auto overflow-y-auto w-full">
      <h2 className="text-xl pb-5">Quotes</h2>
      {filteredQuotes.length === 0 ? (
        <Quote quote={"No quotes!"} />
      ) : (
        filteredQuotes.map(({ quote }, index) => {
          return <Quote quote={quote} key={quote + "-" + index} />;
        })
      )}
    </div>
  );
};

export default QuoteList;
