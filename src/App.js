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
      <div>
        <Fetch />
        {/* <Delete /> */}
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <Counters />
      </div>
      <div>
        <QuoteList />
      </div>
    </div>
  );
}

export default App;
