import React from 'react'
import MicroCard from './MicroCard'

const FollowersColumn = () => {
    return (
        <div className="followers-column">
            <div className="followers-section">
                <div className="home" />
                <h2 className="bold red">For You</h2>
            </div>
            <div className="followers-section">
                <div className="following" />
                <h2>Following</h2>
            </div>
            <hr />
            <p>Your top accounts</p>
            <MicroCard />
            <hr />
        </div>
    )
}

export default FollowersColumn