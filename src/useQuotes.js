import { useContext, useEffect } from "react";
import { AppContext } from "./app-context";

const useQuotes = () => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    if (state.wordcount === "") {
      setState({ ...state, filteredQuotes: state.quotes });
    } else {
      let filter = state.quotes.filter(
        (quote) => quote.quote.split(" ").length === +state.wordcount
      );
      setState({ ...state, filteredQuotes: filter });
    }
  }, [state.quotes, state.wordcount]);

  const fetchQuote = async () => {
    const API_URL = "https://api.kanye.rest/";
    let response = await fetch(API_URL);
    let data = await response.json();

    let new_quotes = [...state.quotes, data];
    setState({ ...state, quotes: new_quotes });
  };

  const filterChange = (amount) => {
    setState({ ...state, wordcount: amount });
  };

  const deleteQuote = (q) => {
    let quo = state.quotes.filter((quote) => {
      return !(q.quote === quote.quote);
    });
    setState({ ...state, quotes: quo });
  };

  // const deleteAll = () => {
  //   setState({ ...state, quotes: (state.quotes.length = 0) });
  // };

  return {
    filteredQuotes: state.filteredQuotes,
    fetchQuote,
    filterChange,
    wordcount: state.wordcount,
    totalCount: state.quotes.length,
    filteredCount: state.filteredQuotes.length,
    deleteQuote,
    // deleteAll,
  };
};

export default useQuotes;
