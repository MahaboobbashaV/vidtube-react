import React, {useState, useEffect} from "react";
import './Feed.css'
import { API_KEY, value_converter } from "../../Data";
import { Link } from "react-router-dom";
import moment from "moment";
const Feed = ({ category }) => {
    const [datas, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
            const response = await fetch(videoList_Url);
            if (!response.ok) {
                throw new Error('Failed to fetch videos');
            }
            const data = await response.json();
            setData(data.items);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {error && <p>{error}</p>}
            {datas.map((item, index) => (
                <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{`${value_converter(item.statistics.viewCount)} views • ${moment(item.snippet.publishedAt).fromNow()}`}</p>
                </Link>
            ))}
        </div>
    )
}

export default Feed;
