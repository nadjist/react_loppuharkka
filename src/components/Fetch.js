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
      <button
        onClick={() => fetch()}
        type="button"
        value={quote}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 w-40  border border-gray-400 rounded shadow"
      >
        Fetch 1 quote
      </button>
    </div>
  );
}

export default Fetch;
