import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import like from '../../Assets/like.png';
import dislike from '../../Assets/dislike.png';
import share from '../../Assets/share.png';
import save from '../../Assets/save.png';
import user_profile from '../../Assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../Data';
import moment from 'moment';


const Playvideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        const response = await fetch(videoDetailsUrl);
        const data = await response.json();
        setApiData(data.items[0]);
    };

    const fetchOtherData = async () => {
        if (apiData) {
            // Fetching channel data
            const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            const channelResponse = await fetch(channelDataUrl);
            const channelData = await channelResponse.json();
            setChannelData(channelData.items[0]);

            // Fetching comment data
            const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=45&videoId=${videoId}&key=${API_KEY}`;
            const commentResponse = await fetch(commentUrl);
            const commentData = await commentResponse.json();
            setCommentData(commentData.items);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchOtherData();
    }, [apiData]);

    return (
        <div className='play-video'>
            {apiData && (
                <>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    ></iframe>
                    <h3>{apiData.snippet.title}</h3>
                    <div className='play-video-info'>
                        <p>
                            {value_converter(apiData.statistics.viewCount)} views &bull;{' '}
                            {moment(apiData.snippet.publishedAt).fromNow()}
                        </p>
                        <div>
                            <span>
                                <img src={like} alt='like' />
                                {apiData.statistics.likeCount ? value_converter(apiData.statistics.likeCount) : '0'}
                            </span>
                            <span>
                                <img src={dislike} alt='dislike' />
                                {apiData.statistics.dislikeCount ? value_converter(apiData.statistics.dislikeCount) : '0'}
                            </span>
                            <span>
                                <img src={share} alt='share' />
                                {apiData.statistics.shareCount ? value_converter(apiData.statistics.shareCount) : '0'}
                            </span>
                            <span>
                                <img src={save} alt='save' />
                                {apiData.statistics.favoriteCount ? value_converter(apiData.statistics.favoriteCount) : '0'}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='publisher'>
                        {channelData && (
                            <img src={channelData.snippet.thumbnails.default.url} alt={channelData.snippet.title} />
                        )}
                        <div>
                            <p>{apiData.snippet.channelTitle}</p>
                            <span>{channelData && value_converter(channelData.statistics.subscriberCount)} Subscribers</span>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className='vid-description'>
                        <p>{apiData.snippet.description.slice(0, 300)}</p>
                        <hr />
                        <h4>{value_converter(apiData.statistics.commentCount)} Comments</h4>
                        {commentData.map((item, index) => (
                            <div key={index} className='comment'>
                                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl?item.snippet.topLevelComment.snippet.authorProfileImageUrl:{user_profile}} alt='user' />
                                <div>
                                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                    <div className='comment-action'>
                                        <img src={like} alt='like' />
                                        <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                        <img src={dislike} alt='dislike' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Playvideo;
