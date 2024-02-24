import React from 'react'
import Profile from '../components/Profile';
const userData = {
  peru : "Noyal Reji"
}

function CollectorHome() {
  return (
    <div>
      <Profile data={userData}></Profile>
    </div>
  )
}

export default CollectorHome;