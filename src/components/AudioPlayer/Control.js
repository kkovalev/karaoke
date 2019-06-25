import React from 'react';
import { PlayerIcon } from 'react-player-controls';

const { Pause, Play } = PlayerIcon;
const style = { marginRight: 32 };

function Control({ isPlaying, onClick }) {
    const ControlIcon = isPlaying ? Pause : Play;

    return <ControlIcon width={32} height={32} style={style} onClick={onClick} />;
}

export default Control;
