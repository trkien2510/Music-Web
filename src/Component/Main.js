import React, { useState, useEffect } from 'react';

import '../Styles/Main.css';
import MusicItem from './MusicItem';
import ArtistItem from './ArtistItem';
import {getAllSong} from '../Service/SongService';
import getAllArtist from '../Service/UserService';
import getFavorite from '../Service/FavoriteService';
import FavoriteItem from './FavoriteItem';
import ReloadIcon from '../assets/icon/reload-icon.png';

export default function Main(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [music, setMusic] = useState([]);
    const [artistList, setArtistList] = useState([])
    const [favoriteList, setFavoriteList] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            const data = await getAllSong();
            const list_artist = await getAllArtist();
            if(localStorage.getItem("username") != null){
                const list_fav = await getFavorite(localStorage.getItem("username"));
                setFavoriteList(list_fav.data.song)
            }
            setArtistList(list_artist);
            setMusic(data);
        }
        fetchData();
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
    async function reloadFavorite(){
        if(localStorage.getItem("username") != null){
            const list_fav = await getFavorite(localStorage.getItem("username"));
            setFavoriteList(list_fav.data.song)
        }
    }
    function Favorite() {
        return (
            <div className="favorite parent">
                <div className="title">
                    <span><strong>Yêu thích</strong></span>
                </div>
                <span className='reload' onClick={reloadFavorite}>
                    <img src={ReloadIcon} alt=''></img>
                </span>
                <div className="list_fav">
                    {   
                        favoriteList?.map((item,index)=>{
                        return(
                            <FavoriteItem key={index} id={item.id} name={item.name} releaseDate={item.releaseDate} username={item.artist.username} nickname={item.artist.nickname}></FavoriteItem>
                        )
                    }) 
                    }
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
                    {music.data?.map((item, index) =>{
                        return (
                            <MusicItem key={index} id={item.id} name={item.name} releaseDate={item.releaseDate} username={item.artist.username} nickname={item.artist.nickname}></MusicItem>
                        )
                    })

                    }
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
                    {artistList.data?.map((item, index)=>{
                        return(
                            <ArtistItem key={index} username={item.username} nickname={item.nickname} ></ArtistItem>
                        )
                    })}
                </div>
            </div>
        )
    }

};

