import React, { Component } from 'react';
import Game from './Game';

class App extends Component {
    render() {
        return (
            <div>
                <Game rows={5} columns={5} />
            </div>
        );
    }
}

export default App;
