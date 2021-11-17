import React, {useState, useEffect} from 'react';
import FollowersColumn from "../components/FollowersColumn";
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import * as userFeed from '../components/userFeed.json'

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(userFeed.itemList)
    }, [])

    items.map((item) => console.log(item.video.playAddr))

    return (
        <div className='container'>
            <FollowersColumn />
            <div className="feed">
                {items.map(
                    (item, index) =>
                        <Card
                            key={index}
                            user={item}
                            video={item.video.playAddr}
                        />
                )}

            </div>
            <div className="suggested-box">
                <div className="section">
                    <div className="suggested">
                        <h2 className="bold2">Suggested accounts</h2>
                        <div className="break" />
                            <MiniCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;