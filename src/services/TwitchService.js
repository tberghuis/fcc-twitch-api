//import Channel from '../stores/Channel.js';
const jsonp = require('jsonp');

const channelNames = ["ESL_SC2", "pokemontcg", "freecodecamp", "adobe", "Nightblue3", "somuchmonsters", "williamchyr", "triplegzgaming", "geekandgamergirl", "artemis"];

export default {
    populateChannelList(channelList) {
        channelNames.forEach((name) => {
            jsonp('https://wind-bow.gomix.me/twitch-api/streams/' + name, null, function (err, data) {
                if (err) {
                    console.error(err.message);
                } else {
                    //let channel = new Channel();
                    let channel = {};
                    channel.name = name;
                    channel.streaming = !!data.stream;

                    //channelList.push(channel);
                    jsonp('https://wind-bow.gomix.me/twitch-api/channels/' + name, null, function (err, data) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            channel.logo = data.logo;
                            channel.url = data.url;

                            if (channel.streaming) {
                                channel.game = data.game + ": " + data.status;
                                // TODO if channel.game is too long truncate


                            } else {
                                channel.game = "offline";
                            }


                            channelList.push(channel);
                        }
                    });


                }
            });
        });



    },
    myMethod2(args) {
        console.log('bar');
    }
};