import React, { Component } from 'react';
import Row from './Row';
import Cell from './Cell';
import Footer from './Footer';

class Game extends Component {
    render() {
        let matrix = [], row;
        for (let r = 0; r < this.props.rows; r++) {
            row = [];
            for (let c = 0; c < this.props.columns; c++) {
                row.push(`${r}${c}`);
            }
            matrix.push(row);
        }
        return (
            <div className="grid">
                {matrix.map((row, idx) => (
                    <Row key={idx}>
                        {row.map(cellId => <Cell key={cellId} id={cellId} />)}
                    </Row>
                ))}
                <Footer {...this.state} />
            </div>
        );
    }
}

export default Game;
