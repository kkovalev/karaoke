import React from 'react';
import { connect } from 'react-redux';
import copyState from '../../lib/copyState';
import bindDispatch from '../../lib/bindDispatch';
import {togglePlayPause} from './actions';
import Control from './Control';

class AudioPlayer extends React.Component {
    ref = ref => this.audioNode = ref;

    componentWillReceiveProps({isPlaying}){
        if (isPlaying) {
            this.audioNode.play();
        } else {
            this.audioNode.pause();
        }
    }

    render(){
        const { isPlaying, togglePlayPause } = this.props;

        return (
            <div className="player">
                <Control onClick={togglePlayPause} isPlaying={isPlaying}/>

                <audio src="/audio.wav" ref={this.ref}/>
            </div>
        )
    }
}

export default connect(
    copyState,
    bindDispatch({togglePlayPause}),
)(AudioPlayer);
