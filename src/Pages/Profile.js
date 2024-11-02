import '../Styles/Profile.css';
import MusicItem from '../Component/MusicItem';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getFavorite from '../Service/FavoriteService';
import logo from '../assets/logo/logo.png'
import { getSongByArtist } from '../Service/SongService';
export default function Profile(){
    const [searchParam] = useSearchParams();
    const username = searchParam.get("username");
    const [user, setUser] = useState([]);
    const [songs, setSongs] = useState([]);
    const [avatar, setAvatar] = useState(logo);
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async () =>{
            let tempData;
            if(username == null){
                const myUsername = localStorage.getItem('username');
                if(myUsername == null || myUsername === ""){
                    navigate("/", {replace: true})
                    return;
                }
                tempData = await getFavorite(myUsername);
            }else{
                tempData = await getFavorite(username);
            }
            getAvatar(tempData.data.user.username);
            setUser(tempData.data.user);
            const tempSong = await getSongByArtist(tempData.data.user.nickname);
            setSongs(tempSong.data);
            
        }
        fetchData();
    },[])
    async function getAvatar(username) {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
    
          fetch(`http://localhost:8080/api/users/avatar?username=${username}`, requestOptions)
            .then((response) => response.blob())
            .then((result) => {
              setAvatar(URL.createObjectURL(result))
            })
            .catch((error) => console.error(error));
    }
    return (
        <div className="profile-container">
            <div className='profile-info'>
                <div className='info-avatar'>
                    <img src={avatar} alt=''></img>
                </div>
                <span className='info-nickname'>{user.nickname}</span>
            </div>
            <h1>Bài hát đã đăng</h1>
            <div className='profile-song-upload'>
                    {songs?.map((item, index) =>{
                        return (
                            <MusicItem key={index} id={item.id} name={item.name} releaseDate={item.releaseDate} username={item.artist.username} nickname={item.artist.nickname}></MusicItem>
                        )
                    })
                    }
            </div>
        </div>
    );
};