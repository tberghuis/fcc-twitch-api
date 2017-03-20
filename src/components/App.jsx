import React, { Component } from 'react';
// import { inject, observer } from 'mobx-react';

// @inject("viewState") @observer
class App extends Component {

    showStreaming = true;
    showOffline = true;



    render() {
        return (
            <div class="page">
                <h1>FCC Twitch Streamers</h1>
                <div>
                    <div><input type="checkbox" checked={this.showStreaming} /> Streaming</div>
                    <div><input type="checkbox" checked={this.showOffline} /> Offline</div>
                </div>
            </div>
        );
    }

};

export default App;
