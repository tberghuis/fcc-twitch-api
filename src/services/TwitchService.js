const jsonp = require('jsonp');

const channelNames = ["ESL_SC2", "pokemontcg", "freecodecamp", "adobe", "Nightblue3", "somuchmonsters", "williamchyr", "triplegzgaming", "geekandgamergirl", "artemis","comster404","SaltyBet"];

const client_id = '3pddx4dsjwwmypmi8xts7vqdrmbjuz';


export default {
    populateChannelList(channelList) {
        channelNames.forEach((name) => {
            //$.getJSON('https://api.twitch.tv/kraken/streams/' + streamers[i] + "?client_id="+ KEY
            //jsonp('https://wind-bow.gomix.me/twitch-api/streams/' + name, null, function (err, data) {
            jsonp('https://api.twitch.tv/kraken/streams/' + name + '?client_id=' + client_id, null, function (err, data) {
                if (err) {
                    console.error(err.message);
                } else {
                    let channel = {};
                    channel.name = name;
                    channel.streaming = !!data.stream;
                    //jsonp('https://wind-bow.gomix.me/twitch-api/channels/' + name, null, function (err, data) {
                    jsonp('https://api.twitch.tv/kraken/channels/' + name + '?client_id=' + client_id, null, function (err, data) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            channel.logo = data.logo;
                            channel.url = data.url;
                            channel.fourzerofour = data.status == 404;
                            channel.fourzerofour_message = data.message;
                            if (channel.streaming) {
                                channel.game = data.game + ": " + data.status;
                            } else {
                                channel.game = "offline";
                            }
                            channelList.push(channel);
                        }
                    });
                }
            });
        });
    }
};
