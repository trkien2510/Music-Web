import React, { useState, useEffect } from 'react';
import '../Styles/Content3Style.css';

const Content3 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <div className="content_3">
            {isLoggedIn ? (
                <>
                    <Info></Info>
                    <Interactive></Interactive>
                    <Volume></Volume>
                </>
            ) : (
                <EmptyContent></EmptyContent>
            )}

        </div>
    );

    function Info() {
        return (
            <div className="info">
                <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="60px" height="60px" alt=""></img>
                <div>
                    <div className="music_name">Song Name</div>
                    <div className="music_artist">Artist Name</div>
                </div>
                <button type="button">
                    <img src='https://cdn-icons-png.flaticon.com/512/3524/3524388.png' width="10px" height="10px" alt=""></img>
                </button>
            </div>
        )
    }

    function Interactive() {
        return (
            <div className="interactive">
                <div className="interactive_button">
                    <button className="suffle">
                        <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="20px" height="20px" alt=""></img>
                    </button>
                    <button className="backward">
                        <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="20px" height="20px" alt=""></img>
                    </button>
                    <button className="play_pause">
                        <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="30px" height="30px" alt=""></img>
                    </button>
                    <button className="forward">
                        <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="20px" height="20px" alt=""></img>
                    </button>
                    <button className="loop">
                        <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' width="20px" height="20px" alt=""></img>
                    </button>
                </div>
                <div className="slider">
                    <span>0:00</span>
                    <input type="range" className="music_slider" value="0"></input>
                    <span>0:00</span>
                </div>
            </div>
        )
    }

    function Volume() {
        return (
            <div className="volume">
                <input type="range" className="volume_slider" value="50" min="0" max="100"></input>
                <span><img src='https://cdn-icons-png.flaticon.com/512/17916/17916372.png' width="20px" height="20px" alt=""></img></span>
            </div>
        )
    }

    function EmptyContent() {
        return (
            <div className='empty'>
                Đăng ký để nghe các bài hát
            </div>
        )
    }
};

export default Content3;