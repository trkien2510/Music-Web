import React, { useState, useEffect } from 'react';
import '../Styles/audioController.css';
import logo from '../assets/logo/logo.png'
export default function AudioController(){
    
    return(
        <div className='audio-controller-container'>
            <div className='audio-info'>
                <div className='audio-info-thumbnail'>
                    <img id='current-song-playing' src={logo} alt=''></img>
                </div>
                <div className='des'>
                    <span id='audio-info-song-name'></span>
                    <span id='audio-info-author'></span>
                </div>
            </div>
            <div className='audio-controller'>
                <audio id='audio-player' controls></audio>
            </div>
        </div>
    );
}