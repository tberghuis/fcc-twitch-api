import React, { Component } from 'react';
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
        TwitchService.populateChannelList(this.channelList);
    }

    render() {
        return (
            <div class="container">
                <h1>FCC Twitch Streamers</h1>
                <div class="list-filter-checkboxes">
                    <span role="button" onClick={() => this.showStreaming = !this.showStreaming}>
                        <input type="checkbox"
                            checked={this.showStreaming} /> Streaming</span>
                    <span role="button" onClick={() => this.showOffline = !this.showOffline}>
                        <input type="checkbox"
                            checked={this.showOffline} /> Offline</span>
                </div>
                <div class="twitch-channel-list">
                    {this.channelList.filter((channel) => {
                        return (this.showOffline && !channel.streaming)
                            || (this.showStreaming && channel.streaming);
                    }).map((channel) => {
                        if (channel.fourzerofour) {
                            return (
                                <div class="twitch-channel fourzerofour">
                                    <div>{channel.fourzerofour_message}</div>
                                </div>);
                        }
                        return (
                            <a href={channel.url} target="_blank" role="button" class="twitch-channel-link">
                                <div class={"twitch-channel " + (channel.streaming ? "streaming" : "offline")} >
                                    <img class="logo" src={channel.logo} />
                                    <div class="name">{channel.name}</div>
                                    <div class="game">{channel.game}</div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    }

};

export default App;
