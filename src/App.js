import Title from "./components/Title";
import Fetch from "./components/Fetch";
import Delete from "./components/Delete";
import Filter from "./components/Filter";
import Counters from "./components/Counters";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <div>
      <Title appname="Kanye Oneliners" />
      <div className="flex justify-between mx-10">
        <div className="flex flex-col gap-4">
          <Fetch />
          <Delete />
        </div>
        <div>
          <Filter />
        </div>
        <div>
          <Counters />
        </div>
      </div>
      <div className="mx-10 my-10">
        <QuoteList />
      </div>
    </div>
  );
}

export default App;
