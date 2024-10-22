import React from 'react';
import '../Styles/ArtistItemStyle.css'

const ArtistItem = (props) => {
    return (
        <div className="artist_item">
            <button>
                <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="50px" height="50px" alt=""></img>
                <span>Artist Name</span>
            </button>
        </div>
    )
}

export default ArtistItem;