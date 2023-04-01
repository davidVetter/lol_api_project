import ChampTitle from "../ChampionDetails/ChampTitle/ChampTitle";
import Header from "../Header/Header";
import "./App.css";
import ChampLore from "../ChampionDetails/ChampLore/ChampLore";
import ChampSkins from "../ChampionDetails/ChampSkins/ChampSkins";
import AllyTips from "../ChampionDetails/ChampTips/AllyTips/AllyTips";
import EnemyTips from "../ChampionDetails/ChampTips/EnemyTips/EnemyTips";
import ChampTags from "../ChampionDetails/ChampTags/ChampTags";
import ChampInfoRatings from "../ChampionDetails/ChampInfoRatings/ChampInfoRatings";
import ChampStats from "../ChampionDetails/ChampStats/ChampStats";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import ChampMainImg from "../ChampionDetails/ChampMainImg/ChampMainImg";

function App() {
  const [selectedChamp, setSelectedChamp] = useState("Aatrox");
  const [champInfo, setChampInfo] = useState({});

  const getChamp = useCallback(() => {
    axios.get(`/champ/${selectedChamp}`).then((response) => {
      setChampInfo(response.data);
    });
  }, [selectedChamp]);

  useEffect(() => {
    getChamp();
  }, [getChamp]);

  return (
    <div className="App">
      {champInfo.data && (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Header champInfo={champInfo.data} />
          <ChampTitle
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
          <ChampSkins champInfo={champInfo.data} selectedChampion={selectedChamp}/>
          <ChampLore champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <AllyTips champInfo={champInfo.data} />
          <EnemyTips champInfo={champInfo.data} />
          <ChampTags champInfo={champInfo.data} />
          <ChampInfoRatings champInfo={champInfo.data} />
          <ChampStats champInfo={champInfo.data} />
          <ChampMainImg
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
        </div>
      )}
    </div>
  );
}

export default App;
