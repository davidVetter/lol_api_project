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
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [selectedChamp, setSelectedChamp] = useState('Aatrox');
  const [champInfo, setChampInfo] = useState({});

  const getChamp = useCallback(() => {
    axios.get(`/champ/${selectedChamp}`).then((response) => {
      console.log('response: ', response.data);
      setChampInfo(champInfo);
    })
  },[selectedChamp, champInfo]);

  useEffect(() => {
    getChamp();
  },[getChamp]);

  return (
    <div className="App">
      {selectedChamp}
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
