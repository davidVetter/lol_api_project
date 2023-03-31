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
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [selectedChamp, setSelectedChamp] = useState('Taric');

  let champInfo = {};
  axios.get(`http://localhost:5000/champ/${selectedChamp}`).then((response) => {
    champInfo = response.data;
    console.log('This is champ: ', champInfo);
  });

  console.log('Champ: ', champInfo);

  return (
    <div className="App">
      <Header champInfo={champInfo.data} />
      <ChampTitle champInfo={champInfo.data} />
      <ChampSkins champInfo={champInfo.data} />
      <ChampLore champInfo={champInfo.data} />
      <AllyTips champInfo={champInfo.data} />
      <EnemyTips champInfo={champInfo.data} />
      <ChampTags champInfo={champInfo.data} />
      <ChampInfoRatings champInfo={champInfo.data} />
      <ChampStats champInfo={champInfo.data} />
    </div>
  );
}

export default App;
