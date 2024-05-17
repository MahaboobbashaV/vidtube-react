import React, { useEffect, useState } from 'react'
import './Recommended.css'
// import thumbnail1 from '../../Assets/thumbnail1.png'
// import thumbnail2 from '../../Assets/thumbnail2.png'
// import thumbnail3 from '../../Assets/thumbnail3.png'
// import thumbnail4 from '../../Assets/thumbnail4.png'
// import thumbnail5 from '../../Assets/thumbnail5.png'
// import thumbnail6 from '../../Assets/thumbnail6.png'
// import thumbnail7 from '../../Assets/thumbnail7.png'
// import thumbnail8 from '../../Assets/thumbnail8.png'
import { API_KEY, value_converter } from '../../Data'
import { Link } from 'react-router-dom'


const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([])

    const fetchData = async() =>{
        const relatedVideo_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_Url).then(res=>res.json()).then(data=> setApiData(data.items))
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div className='recommended'>
        {apiData.map((item,index) => {
            return (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="tm1" />
            <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
            </Link>
            )
        })}
        
    </div>
  )
}

export default Recommended