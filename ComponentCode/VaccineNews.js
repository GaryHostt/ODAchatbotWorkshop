var request = require('request');
'use strict';

module.exports = {
  metadata: () => ({
    name: 'VaccineNews',
    properties: {
      inputString: {required:true,type: 'string'},
      returnString: { required: true, type: 'string' }
    },
    supportedActions: ['success', 'failure']
  }),
  invoke: (conversation, done) => {
      const {inputString} = conversation.properties();
      const {returnString} = conversation.properties();

  console.log('inputString: ', inputString);
        
      request('https://newsapi.org/v2/everything?apiKey=edf162b96b7c4feaad81082c4e685481&language=en&q=vaccines&pagesize=1',
        {method: 'GET'
        }, (error, response, body) => {
        console.log('response: ', response.statusCode);

        //reply
        if (response.statusCode == 200 || response.statusCode == 201) {
          conversation.reply(returnString);
          conversation.keepTurn(true);
          conversation.transition('success');
          done();
        } else if (response.statusCode == 400) {
          //returnString below might need to be the inputString
          conversation.reply(returnString);
          conversation.keepTurn(true);
          conversation.transition('failure');
          done();
        } else if (response.statusCode == 401) {
          conversation.reply("Failed to process due to authorization");
          conversation.keepTurn(true);
          conversation.transition('failure');
          done();
        } else {
          conversation.reply("Failed to process due to unknown error");
          conversation.keepTurn(true);
          conversation.transition('failure');
          done();
        }
    });

  }
};

