import React from "react";

export default function SingleSkinCard({ skin, selectedChampion }) {
  return (
    <>
      <img
        alt={`Skin of ${selectedChampion}`}
        style={{width: '90%'}}
        src={`/img/splash/${selectedChampion}_${skin.num}.jpg`}
      />
      <div>{skin.name === "default" ? selectedChampion : skin.name}</div>
    </>
  );
}
