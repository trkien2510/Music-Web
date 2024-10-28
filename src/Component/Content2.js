import React, { useState, useEffect } from 'react';
import axios from "axios";
import FavoriteItem from './FavoriteItem';
import '../Styles/Content2Style.css';
import MusicItem from './MusicItem';
import ArtistItem from './ArtistItem';

const Content2 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <div className="content_2">
            {isLoggedIn ? <Favorite></Favorite> : <EmptyFavorite></EmptyFavorite>}
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

    function EmptyFavorite() {
        return (
            <div className="favorite">
                <div className="title">
                    <span><strong>Yêu thích</strong></span>
                </div>
                <div className="list_fav">
                    đăng nhập để lưu danh sách yêu thích
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