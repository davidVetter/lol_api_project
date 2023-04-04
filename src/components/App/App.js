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
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState("none");

  const getChamp = useCallback(() => {
    axios.get(`/champ/${selectedChamp}`).then((response) => {
      setChampInfo(response.data);
      setCurrentBackgroundImage(
        `/img/centered/${selectedChamp}_${response.data.data[selectedChamp].skins[0].num}.jpg`
      );
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

  const backgroundStyling = {
    height: "100%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `${
      currentBackgroundImage === "none"
        ? "none"
        : `url("${currentBackgroundImage}")`
    }`,
  };

  return (
    <div className="App" style={backgroundStyling}>
      {champInfo.data && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "normal",
          }}
        >
          <Header champInfo={champInfo.data} />
          <SelectChampion
            champList={champList}
            getChamp={getChamp}
            setSelectedChamp={setSelectedChamp}
            setChampInfo={setChampInfo}
          />
          <ChampTitle
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
          <ChampLore champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <AllyTips champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <EnemyTips champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <ChampSkins
            champInfo={champInfo.data}
            selectedChampion={selectedChamp}
            setCurrentBackgroundImage={setCurrentBackgroundImage}
          />
          <ChampTags champInfo={champInfo.data} selectedChamp={selectedChamp} />
          <ChampInfoRatings
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
          <ChampStats
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
          <ChampAbilites
            champInfo={champInfo.data}
            selectedChamp={selectedChamp}
          />
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
