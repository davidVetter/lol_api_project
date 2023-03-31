import ChampTitle from '../ChampionDetails/ChampTitle/ChampTitle';
import Header from '../Header/Header';
import './App.css';
import ChampLore from '../ChampionDetails/ChampLore/ChampLore';
import ChampSkins from '../ChampionDetails/ChampSkins/ChampSkins';
import AllyTips from '../ChampionDetails/ChampTips/AllyTips/AllyTips';
import EnemyTips from '../ChampionDetails/ChampTips/EnemyTips/EnemyTips';
import ChampTags from '../ChampionDetails/ChampTags/ChampTags';
import ChampInfoRatings from '../ChampionDetails/ChampInfoRatings/ChampInfoRatings';
import ChampStats from '../ChampionDetails/ChampStats/ChampStats';


function App() {
  return (
    <div className="App">
      <Header />
      <ChampTitle />
      <ChampSkins />
      <ChampLore />
      <AllyTips />
      <EnemyTips />
      <ChampTags />
      <ChampInfoRatings />
      <ChampStats />
    </div>
  );
}

export default App;
