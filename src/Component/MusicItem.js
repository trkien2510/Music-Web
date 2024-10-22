import React from 'react';
import '../Styles/MusicItemStyle.css'

const MusicItem = (props) => {
    return (
        <div className="music_item">
            <div className='m_item'>
                <button type="button">
                    <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="50px" height="50px" alt=""></img>
                </button>
                <span>
                    <div className="music_name">Song Name</div>
                    <div className="music_artist">Artist Name</div>
                </span>
                <button className="add_fav" type="button">
                    <img src={""} alt=""></img>
                </button>
            </div>
        </div>
    )
}

export default MusicItem;