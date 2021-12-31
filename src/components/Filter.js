import useQuotes from "../useQuotes";

function Filter() {
  const { filterChange, wordcount } = useQuotes();

  return (
    <div>
      <label htmlFor="haku">Word count filter: </label>
      <input
        type="text"
        id="haku"
        value={wordcount}
        onChange={(e) => filterChange(e.target.value)}
      ></input>
    </div>
  );
}

export default Filter;
