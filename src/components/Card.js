import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({user}) => {

    //IF API WOULD WORK: (would smth like that)

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [videos, setVideos] = useState([]); //video urls
    // const [names, setNames] = useState([]); //names
    // const [avatars, setAvatars] = useState([]); //url avatars
    // const [usernames, setUsernames] = useState([]); // usernames

    // // Примечание: пустой массив зависимостей [] означает, что
    // // этот useEffect будет запущен один раз
    // // аналогично componentDidMount()
    // useEffect(() => {
    //     fetch("https://tiktok33.p.rapidapi.com/trending/feed", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    //             "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result)
    //
    //                 result.map((res) =>
    //                     setVideos(res.videoUrl)
    //                 )
    //                 result.map((res) =>
    //                     setNames(Object.values(res)[4].name)
    //                 )
    //                 result.map((res) =>
    //                     setAvatars(Object.values(res)[4].avatar)
    //                 )
    //                 result.map((res) =>
    //                     setUsernames(Object.values(res)[4].nickName)
    //                 )
    //                 setVideos(result[0].videoUrl)
    //             },
    //
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])
    //
    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    // } else {
    //     // console.log(items)
    //     // var contentKeys = Object.keys(items);
    //     // console.log(contentKeys)
    //
    //
    //     items.map((item) =>
    //         console.log(Object.values(item)[4].avatar)
    //         console.log(item.videoUrl)
    //         setVideos(item.videoUrl)
    //     )

    var author = user.author
    var video = user.video
    var hashname = user.textExtra
    var info = user.stats

    var avatar = author.avatarThumb
    var nickname = author.nickname
    var hashtagname = Object.values(hashname)[0].hashtagName
    var vid = video.playAddr
    var likes = info.diggCount
    var comments = info.commentCount

    return (
        <div className="card">
            <div className="break"/>
            <div className="section">
                <div className="user-info">
                    <Link to='/about'>
                        <img className="user-profile" src={avatar} width={'100%'}/>
                    </Link>
                        <div className="section1">
                            <h3 className="bold">{nickname}</h3>
                            <p className="username">@{hashtagname}</p>
                        </div>
                    <div className="buttonb">
                        <button className="follow-button"> Follow </button>
                    </div>
                </div>

                <video className="video" controls>
                    {/* Error 401 on video from TikTok, so done another video from web */}
                    {/*<source src="https://i.imgur.com/FTBP02Y.mp4" type="video/mp4" />*/}
                    <source src="https://i.imgur.com/Kzvbeup.mp4" type="video/mp4" />

                    {/*IF VIDEO WOULD WORK it will be smth like that:*/}
                    {/*<source src={vid} type="video/mp4" />*/}

                    {/*Just for test*/}
                    {/*<source src="https://v39-eu.tiktokcdn.com/d1184227caf13ef1dc53685996e3c40f/6193dab1/video/tos/useast2a/tos-useast2a-pve-0068/8fd9ea2ab95040e79479942caad0ad6a/?a=1233&br=1748&bt=874&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111161020070101890362000305A3F8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZtOTg6ZmxxOTMzNzczM0ApOTRkZzVlZztpNzY8OTtkPGdhYWVzcjRnczVgLS1kMTZzczMwNDIyYzA1MV41MS42NjY6Yw%3D%3D&vl=&vr=%22" type="video/mp4" />*/}
                </video>


                <div className="section socials">
                    <div className="socials_icons">
                        <i className="far fa-heart fa-3x fa-hover-hidden"></i>
                        <div className="social-tag">{likes}</div>
                        <i className="far fa-comment-dots fa-3x"></i>
                        <div className="social-tag">{comments}</div>
                        <i className="far fa-share-square fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card