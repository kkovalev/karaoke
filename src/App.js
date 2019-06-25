import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';
import TextView from './components/text-view';
import AudioPlayer from './components/AudioPlayer';

import './App.css';

export default function App() {
    return (
        <ReduxProvider store={store}>
            <div>
                <TextView />
                <AudioPlayer />
            </div>
        </ReduxProvider>
    );
}
