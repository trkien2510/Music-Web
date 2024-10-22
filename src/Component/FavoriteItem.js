import React from 'react';
import '../Styles/FavoriteItemStyle.css'

const FavoriteItem = () => {
    return (
        <div className="fav_music">
            <button>
                <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="50px" height="50px" alt=""></img>
                <span>
                    <div className="music_name">Song Name</div>
                    <div className="music_artist">Artist Name</div>
                </span>
            </button>
        </div>
    )
}

export default FavoriteItem;