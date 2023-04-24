import "./App.css";
import Home from "./pages/Home";

function App() {
  const words = ["hi", "hello", "how", "hour", "great", "rain"];

  // const callback = (element) => {
  //   return element[0] === "h";
  // };

  // const filterWords = words.filter(callback);

  const filterWords = words.filter((element) => {
    return element[0] === "h";
  });

  console.log(filterWords);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
