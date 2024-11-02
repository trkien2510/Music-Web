import React from 'react';
import AudioController from '../Component/AudioController';
import Header from '../Component/Header';
import { Outlet } from 'react-router-dom';
export default function Display(){
    return (
        <div className="display">
            <Header></Header>
            <Outlet></Outlet>
            <AudioController></AudioController>
        </div>
    );
};