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
                    <span role="button" onClick={()=>this.showStreaming = !this.showStreaming}>
                        <input type="checkbox" 
                            checked={this.showStreaming} /> Streaming</span>
                    <span role="button" onClick={()=>this.showOffline = !this.showOffline}>
                        <input type="checkbox" 
                            checked={this.showOffline} /> Offline</span>
                </div>
                <div>
                    {this.channelList.map((channel)=>{
                        return (
                            <div>
                                {/* highlight green streaming, red offline */}
                                <img class="logo" src={channel.logo} />
                                    
                                {channel.name} 
                                {channel.game}
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

};

export default App;
