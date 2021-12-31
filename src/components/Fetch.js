import { useState } from "react";
import useQuotes from "../useQuotes";

function Fetch() {
  const { fetchQuote } = useQuotes();

  const [quote] = useState("");

  const fetch = () => {
    let q = { quote };
    fetchQuote(q);
  };

  return (
    <div>
      <button onClick={() => fetch()} type="button" value={quote}>
        Fetch 1 quote
      </button>
    </div>
  );
}

export default Fetch;
