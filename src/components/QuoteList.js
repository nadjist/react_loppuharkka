import useQuotes from "../useQuotes";
import Quote from "./Quote";

const QuoteList = () => {

  const { filteredQuotes } = useQuotes();

  return (
    <div className="flex-auto overflow-y-auto w-full">
      {filteredQuotes.map(({ quote }, index) => {
        return <Quote quote={quote} key={quote + "-" + index} />;
      })}
    </div>
  );
};

export default QuoteList;
