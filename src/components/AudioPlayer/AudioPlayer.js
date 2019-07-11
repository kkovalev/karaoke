import React from 'react';
import { connect } from 'react-redux';
import bindDispatch from '../../lib/bindDispatch';
import {onTimeUpdate} from './actions';

function AudioPlayer(props){
    return <audio controls {...props} src="/audio.wav"/>
}

export default connect(
    null,
    bindDispatch({onTimeUpdate}),
)(AudioPlayer);
