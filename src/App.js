import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './modules/store';
import TextView from './components/text-view';
import AudioPlayer from './components/AudioPlayer';

import './App.css';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

export default function App() {
    return (
        <ReduxProvider store={reduxStore}>
            <div>
                <TextView />
                <AudioPlayer />
            </div>
        </ReduxProvider>
    );
}
