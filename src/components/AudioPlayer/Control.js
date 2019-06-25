import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PlayerIcon } from 'react-player-controls';
import copyState from '../../lib/copyState';
import {togglePlayPause} from './actions';

const { Pause, Play } = PlayerIcon;
const style = { marginRight: 32 };

function Control({ isPlaying, onClick }) {
    const ControlIcon = isPlaying ? Pause : Play;

    return <ControlIcon width={32} height={32} style={style} onClick={onClick} />;
}

export default connect(
    copyState,
    dispatch =>
        bindActionCreators(
            {
                onClick: togglePlayPause,
            },
            dispatch
        )
)(Control);
