import React from 'react'

export default function EnemyTips({ champInfo, selectedChamp }) {
  return (
    <>
      <h3>Enemy Tips:</h3>
      <ul>
        {champInfo[selectedChamp].enemytips.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
    </>
  )
}
