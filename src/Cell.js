import React, { Component } from 'react';

class Cell extends Component {
    /* A cell is active if its id is part of the activeCells
    * array, and we only want the active cells to show up on the 
    * grid during the “memorize” gameState.
    */
    active() {
        return this.props.activeCells.indexOf(this.props.id) >= 0;
    }
    render () {
        let className = 'cell';
        if (this.props.gameState === 'memorize' && this.active()) {
            className += ' active';
        }
        return (
            <div className={className}>
                {this.props.id}
            </div>
        );
    }
}

export default Cell;