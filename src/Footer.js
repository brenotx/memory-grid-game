import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { gameState: 'ready'};
    }
    render() {
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.state.gameState]}...
                </div>
            </div>
        );
    }
}

Footer.defaultProps = {
    hints: {
        ready: "Get Ready",
        memorize: "Memorize",
        recall: "Recall"
    }
}

export default Footer;
