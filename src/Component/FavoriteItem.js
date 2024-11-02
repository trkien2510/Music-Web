import '../Styles/FavoriteItem.css'
import React, { useContext, useEffect, useState } from 'react';
import { getThumbnail } from '../Service/SongService';
import minus from '../assets/icon/minus-icon.png'
const FavoriteItem = (props) => {
    const [thumbnail, setThumbnail] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const data = await getThumbnail(props.id);
            setThumbnail(data);
        }
        fetchData();
    }, []);
    const playMusic = () =>{
        const requestOptions = {
        method: "GET",
        redirect: "follow"
        };
    
        fetch(`http://localhost:8080/api/songs/play?id=${props.id}`, requestOptions)
            .then((response) => response.blob())
            .then((result) => {
                const objectURL = URL.createObjectURL(result);
                const newAudioURL = objectURL;
                document.getElementById("audio-player").src = newAudioURL;
                return newAudioURL;
            })
            .catch((error) => console.error(error));

            document.getElementById('audio-info-song-name').innerText = props.name;
            
            document.getElementById('audio-info-author').innerText = props.nickname;
            document.getElementById('current-song-playing').src = thumbnail;
    }
    const removeFavorite = async () =>{
        if(localStorage.getItem("token") == null){
            alert("Bạn cần đăng nhập!!!");
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };

        await fetch(`http://localhost:8080/api/favorites?id=${props.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(result.code == 200){
                alert("Xóa bài hát yêu thích thành công!")
            }
        })
        .catch((error) => console.error(error));

    }
    return (
        <div className="music_item">
            <div className='m_item' onClick={playMusic}>
                <div className='thumbnail'>
                    <img src={thumbnail} width="50px" height="50px" alt=""></img>
                </div>
                <span>
                    <div className="music_name">{props.name}</div>
                    <div className="music_artist">{props.nickname}</div>
                </span>
            </div>
            <button className="add_fav" type="button" onClick={removeFavorite}>
                <img src={minus} alt=""></img>
            </button>
        </div>
    )
}

export default FavoriteItem;