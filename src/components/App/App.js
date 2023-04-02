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
import ChampAbilites from "../ChampionDetails/ChampAbilities/ChampAbilites";
import SelectChampion from "../SelectChampion/SelectChampion";

function App() {
  const [selectedChamp, setSelectedChamp] = useState("Taric");
  const [champInfo, setChampInfo] = useState({});
  const [champList, setChampList] = useState({});

  const getChamp = useCallback(() => {
    axios.get(`/champ/${selectedChamp}`).then((response) => {
      setChampInfo(response.data);
    });
  }, [selectedChamp]);

  const getChampList = useCallback(() => {
    axios.get(`/champ/champlist`).then((response) => {
      setChampList(response.data);
    });
  }, []);

  useEffect(() => {
    getChamp();
    getChampList();
  }, [getChamp, getChampList]);

  const changeChamp = () => {
    setChampInfo({});
    setSelectedChamp("Fiddlesticks")
  }
  

  return (
    <div className="App">
      {champInfo.data && (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Header champInfo={champInfo.data} />
          <button onClick={changeChamp}>Brand</button>
          <SelectChampion champList={champList} getChamp={getChamp} setSelectedChamp={setSelectedChamp} setChampInfo={setChampInfo}/>
          <ChampTitle
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
          <ChampSkins champInfo={champInfo.data} selectedChampion={selectedChamp}/>
          <ChampLore champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <AllyTips champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <EnemyTips champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <ChampTags champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <ChampInfoRatings champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <ChampStats champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <ChampAbilites champInfo={champInfo.data} selectedChamp={selectedChamp} />
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
