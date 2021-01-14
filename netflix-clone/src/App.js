import './App.css';
import Row from "./Row"
import requests from "./requests"

function App() {
  return (
    <div className="App">
      <h2>This is Jason</h2>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App  ;
