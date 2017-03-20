
// import { observable, computed } from 'mobx'

import Channel from '../stores/Channel.js'

const channelList = ["ESL_SC2", "pokemontcg", "freecodecamp", "adobe", "Nightblue3", "somuchmonsters", "williamchyr", "triplegzgaming"];

class TwitchService {
    constructor() {
        // api call here for now

        this.channels = channelList.map((channel)=>{
            // axios get

            // log

            // fill with data
            return new Channel(channel);
        });

        this.refreshStreamingStatus();
    }


    refreshStreamingStatus = () => {
        // axios here
    }

}

const twitchService = new TwitchService();

export default twitchService;


