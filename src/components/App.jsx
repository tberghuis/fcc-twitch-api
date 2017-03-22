import React, { Component } from 'react';
// import { inject, observer } from 'mobx-react';

import { observer } from 'mobx-react';
import { observable } from 'mobx';

import TwitchService from '../services/TwitchService.js';


@observer
class App extends Component {

    @observable showStreaming = true;
    @observable showOffline = true;

    @observable channelList = [];

    constructor(props) {
        super(props);

        // use twitchService to populate
        TwitchService.populateChannelList(this.channelList);
        //console.log("channel list 0",this.channelList[0].name);
        //console.log("channel list",this.channelList);

        // debugging
        //window.channelList = this.channelList;
    }

    render() {
        return (
            <div class="container">
                <h1>FCC Twitch Streamers</h1>
                <div>
                    <span role="button" onClick={() => this.showStreaming = !this.showStreaming}>
                        <input type="checkbox"
                            checked={this.showStreaming} /> Streaming</span>
                    <span role="button" onClick={() => this.showOffline = !this.showOffline}>
                        <input type="checkbox"
                            checked={this.showOffline} /> Offline</span>
                </div>
                <div>
                    {this.channelList.filter((channel) => {
                        return (this.showOffline && !channel.streaming)
                            || (this.showStreaming && channel.streaming);
                    }).map((channel) => {
                        return (
                            <div class={"twitch-channel " + (channel.streaming ? "streaming":"offline")} >
                                {/* highlight green streaming, red offline */}
                                <div><img class="logo" src={channel.logo} /></div>
                                <div><a href={channel.url} target="_blank">{channel.name}</a></div>
                                <div class="game">{channel.game}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

};

export default App;
