const axios = require('axios')
const oAuth = require('oauth')
module.exports.getTweets = async(queryText,count) => {return new Promise( (resolve)=> {

    try {
        let oauth = new oAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            'consumer API key',
            'consumer API key secret',
            '1.0A',
            null,
            'HMAC-SHA1'
        );

        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${queryText}&count=${count}&include_entities=true&with_twitter_user_id=true&result_type=mixed`,
            'You access token', //test user token
            'Your token-secret', //test user secret            
            function (error, data){
              if (error) resolve({success:false,data:error});        
              resolve({success:true,data:JSON.parse(data)});
            });   
    }
    catch (error) {
        resolve({success:false,data:error})
      }

})

}
