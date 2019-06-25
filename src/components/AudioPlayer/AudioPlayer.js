import React from 'react';
import Control from './Control';

export default function AudioPlayer(){
    return (
        <div className="player">
            <Control/>

            <audio src="/audio.wav"/>
        </div>
    )
}
