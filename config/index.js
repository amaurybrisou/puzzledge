/*
 * Defines the various settings as used by Syte
 */

module.exports = {

  dev : false,
  sitename : "Puzzledge.eu",
  author : "Amaury Brisou",
  url: 'http://puzzledge.eu',

  consumer_key : 'jLKPlgaf6axAPbWXLRuHVZ6dI',
  consumer_secret : 'TXfxP5vu2AhzZyXBf3OfqKa0tDfS1w9z4HUmV4RTLQ5aPNP2Xf',
  access_token_key : '2546694007-3HkuRqNsQ9DTvi12KyCNke4DHECgyB8OoLI8UMk',
  access_token_secret : 'xfzp7kljfjlADpAtued5gDnzxpem4nXVSnDspaOwWqOcr',

  twitter_update_delay : 60 * 1000,
  log_level : 'debug',
  log_appender : 'puzzledge-console',
  
  web_server : {
    host: 'localhost',
    port: 8080,
    options: {
      debug: {
        request : []
      },
      labels: 'web',
      cors: false
    }
  },
  hapi_api_log_options : {
    subscribers: {
      'console':                         ['ops', 'request', 'log', 'error', 'received', ''],
      //'http://localhost:8000/logs':           ['log'],
      //'/tmp/logs/':                      ['request', 'log'],
      //'udp://127.0.0.1:9000':            ['request'],
      //'redis://127.0.0.1:6379/listname': ['request']
    }
  }
};