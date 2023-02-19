import Today from "./components/Today/Today";
import Time from "./components/Time/Time";
import Weather from "./components/Weather/Weather";
import Quote from "./components/Quote/Quote";


function App() {
  return (
    <div>
      <Weather />
      <Time />
      <Today />
      <Quote />
    </div>
  );
}

export default App;
