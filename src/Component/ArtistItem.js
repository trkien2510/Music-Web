import React, { useEffect, useState } from 'react';
import '../Styles/ArtistItemStyle.css'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom';
const ArtistItem = (props) => {
    const [avatar, setAvatar] = useState(logo);
    useEffect(() => {
        const token = localStorage.getItem('token');
        
          const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
    
          fetch(`http://localhost:8080/api/users/avatar?username=${props.username}`, requestOptions)
            .then((response) => response.blob())
            .then((result) => {
              setAvatar(URL.createObjectURL(result))
            })
            .catch((error) => console.error(error));
        
      }, []);
    return (
        <Link className="artist_item" to={`/profile?username=${props.username}`}>
            <button>
                <img src={avatar} width="50px" height="50px" alt=""></img>
                <span>{props.nickname}</span>
            </button>
        </Link>
    )
}

export default ArtistItem;