import React from 'react'
import './Sidebars.css'
import home from '../../Assets/home.png'
import game_icon from '../../Assets/game_icon.png'
import automobiles from '../../Assets/automobiles.png'
import sports from '../../Assets/sports.png'
import entertainment from '../../Assets/entertainment.png'
import tech from '../../Assets/tech.png'
import music from '../../Assets/music.png'
import blogs from '../../Assets/blogs.png'
import news from '../../Assets/news.png'
import jack from '../../Assets/jack.png'
import simon from '../../Assets/simon.png'
import tom from '../../Assets/tom.png'
import megan from '../../Assets/megan.png'
import cameron from '../../Assets/cameron.png'

const Sidebars = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="home" /><p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="home" /><p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="home" /><p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={() => setCategory(17)}>
          <img src={sports} alt="home" /><p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="home" /><p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="home" /><p>Technology</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="home" /><p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="home" /><p>Blog</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={() => setCategory(25)}>
          <img src={news} alt="home" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="jack" /><p>PewDiePie</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="jack" /><p>MrBeast</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="jack" /><p>Justin Bieber</p>
        </div>
        <div className="side-links">
          <img src={megan} alt="jack" /><p>5-Minutes Craft</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="jack" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebars