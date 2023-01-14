import './assets/css/App.css';
import NavBar from './components/NavBar';
import SearchWeather from './components/SearchWeather';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchWeather/>
    </div>
  );
}

export default App;
