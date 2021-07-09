import React from 'react';
import './App.css';
import {Main} from './scenes/main/Main'
/**
 * Credits
 * Adiel Hercules - phone scss
 * https://codepen.io/adielhercules/pen/dJJGBQ
 *
 *
 *
 */


function App() {
    return (
        <div className="phone">
            <i>Speaker</i>
            <b>Camera</b>
            <Main />
        </div>
    );
}

export default App;
