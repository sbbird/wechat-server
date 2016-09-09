// Need to apply for line business account or API trial accout to have channel ID secret and MID
var _ = require('lodash');
var LineBot = require('line-bot-sdk');
var client = LineBot.client({
    channelID: '',
    channelSecret: '',
    channelMID: ''
});

module.exports = function (req, res) {
    console.log(req.body.result);

    var receives = client.createReceivesFromJSON(req.body);
    _.each(receives, function(receive){

        if(receive.isMessage()){

            if(receive.isText()){

                if(receive.getText()==='蛤'){
                    isFirst() ? client.sendText(receive.getFromMid(), '香港记者+1s Excited!!') : client.sendText(receive.getFromMid(), '大新闻, naive');
                } else {
                    danmakudb.push(receive.getText());
                }

            } else {
                client.sendText(receive.getFromMid(), receive.getText());
            }
        } else if(receive.isOperation()){
            console.log('found operation');
        } else {
            console.error('invalid receive type');
        }
    });

    res.send('ok');
};

function isFirst() {
    if (dbstore['replied']){
        dbstore['replied'] = false;
        return true;
    }
    return false;
}
