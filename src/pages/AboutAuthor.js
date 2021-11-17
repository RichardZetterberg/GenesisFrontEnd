import React, {useState, useEffect} from 'react';
import * as userFeed from '../components/userFeed.json'

const AboutAuthor = ({id}) => {


    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(userFeed.itemList)
    }, [])
    items.map((item) =>
    console.log(item.author))

    let res = items.map(function(item, index) {
        return <div key={item.id} className="aboutAthorContainer">
            <span> {index+1} )</span>
            <ul>
                <li>Nickname: {item.author.uniqueId} </li>
                <li>Name: {item.author.nickname}</li>
                <li>Caption: {item.author.signature}</li>
            </ul>
        </div>;
    });
    return (
        <div>
            {res}
        </div>
    );
};

export default AboutAuthor;

