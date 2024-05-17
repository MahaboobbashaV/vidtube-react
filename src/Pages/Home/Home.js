import React from 'react'
import './Home.css'
import Sidebars from '../../Components/SideBars/Sidebars'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0)

  return (
    <>
    <Sidebars sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed category={category} />
    </div>
    </>
  )
}

export default Home