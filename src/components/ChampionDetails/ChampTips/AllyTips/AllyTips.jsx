import React from 'react'

export default function AllyTips({ champInfo, selectedChamp }) {
  return (
    <>
      <h3 style={{textAlign: 'left'}}>Ally Tips:</h3>
      <div style={{padding: '5px', border: '2px black solid', margin: '5px'}}>{champInfo[selectedChamp].allytips}</div>
    </>
  )
}
