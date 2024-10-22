import React from 'react';
import FavoriteItem from './FavoriteItem';
import '../Styles/Content2Style.css';
import MusicItem from './MusicItem';
import ArtistItem from './ArtistItem';

const Content2 = () => {
    return (
        <div className="content_2">
            <Favorite></Favorite>
            <Music></Music>
            <Artist></Artist>
        </div>
    );

    function Favorite() {
        return (
            <div className="favorite">
                <div className="title">
                    <span><strong>Yêu thích</strong></span>
                </div>
                <div className="list_fav">
                    {Array(10).fill(0).map((_, index) => (
                        <FavoriteItem key={index}></FavoriteItem>
                    ))}
                </div>
            </div>
        )
    }

    function Music() {
        return (
            <div className="music">
                <div className="title">
                    <span><strong>Tất cả</strong></span>
                </div>
                <div className="list_music">
                    {Array(10).fill(0).map((_, index) => (
                        <MusicItem key={index}></MusicItem>
                    ))}
                </div>
            </div>
        )
    }

    function Artist() {
        return (
            <div className="artist">
                <div className="title">
                    <span><strong>Nghệ sĩ</strong></span>
                </div>
                <div className="list_artist">
                    {Array(10).fill(0).map((_, index) => (
                        <ArtistItem key={index}></ArtistItem>
                    ))}
                </div>
            </div>
        )
    }

};

export default Content2;