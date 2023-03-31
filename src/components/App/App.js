import ChampTitle from '../ChampionDetails/ChampTitle/ChampTitle';
import Header from '../Header/Header';
import './App.css';
import ChampLore from '../ChampionDetails/ChampLore/ChampLore';

function App() {
  return (
    <div className="App">
      <Header />
      <ChampTitle />
      <ChampLore />
    </div>
  );
}

export default App;
