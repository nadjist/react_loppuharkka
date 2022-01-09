import useQuotes from "../useQuotes";

function Filter() {
  const { filterChange, wordcount } = useQuotes();

  return (
    <div>
      <label htmlFor="haku">Word count filter: </label>
      <input
        className="invalid:border-red-500 invalid:border-2 shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        placeholder="insert number"
        min={0}
        id="haku"
        value={wordcount}
        onChange={(e) => filterChange(e.target.value)}
      ></input>
    </div>
  );
}

export default Filter;
