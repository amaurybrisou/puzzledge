var fs = require('fs'),
  domain = 'localhost'

module.exports = {
  pack: {
    cache: {
      engine: require('catbox-memory')
      // engine: require('catbox-redis'),
      // partition: 'LeBrisouBackend',
      // host: '192.168.1.14',
      // port: 6379
    }
  },
  servers: [{
    host: '127.0.0.1',
    port: 8080,
    //uri: 'http://puzzledge.eu:8080',
    // host : dic.local,
    options: {
      // tls: {
      //   key: fs.readFileSync( __dirname + /plugins/dictionary-api/cert/+domain+.key),
      //   cert: fs.readFileSync(__dirname + /plugins/dictionary-api/cert/+domain+.crt)
      // },
      labels: 'puzzledge-eu',
      //cors: true,
      debug: {
        request: ['error', 'uncaught', 'log']
      }
    }
  }, {
    host: '127.0.0.1',
    port: 8081,
    //uri: 'http://trip.puzzledge.eu',
    options: {
      labels: 'trip-puzzledge-eu',
    },
    debug: {
      request: ['error', 'uncaught', 'log']
    }
  }],
  plugins: {
    '../../../node_modules/good': [{
      options: {
        extendedRequests: true,
        // requestsEvent: response,
        subscribers: {
          console: ['request', 'log', 'error'],
          'logs/requests.log': ['request'],
          'logs/errors.log': ['error'],
          'logs/log.log': ['log'],
          'logs/ops.log': ['ops'],
        }
      }
    }],
    '../../../plugins/blog.puzzledge.eu': [{
      options: {
        sitename: "Puzzledge.eu",
        author: "Amaury Brisou",
        url: 'http://puzzledge.eu',
        description: 'IT news',
        image: 'http://puzzledge.eu/images/icone.png',
        copyright: '2014 Amaury Brisou',
        categories: ['Computer Science', 'IT'],
        rss_update_delay: 60 * 1000,

        consumer_key: 'jLKPlgaf6axAPbWXLRuHVZ6dI',
        consumer_secret: 'TXfxP5vu2AhzZyXBf3OfqKa0tDfS1w9z4HUmV4RTLQ5aPNP2Xf',
        access_token_key: '2546694007-3HkuRqNsQ9DTvi12KyCNke4DHECgyB8OoLI8UMk',
        access_token_secret: 'xfzp7kljfjlADpAtued5gDnzxpem4nXVSnDspaOwWqOcr',

        twitter_update_delay: 60 * 1000,
      },
      select: ['puzzledge-eu']
    }],
    '../../../plugins/trip.puzzledge.eu': [{
      options: {
        sitename: "trip.puzzledge.eu",
        author: "Amaury Brisou",
        url: 'http://trip.puzzledge.eu',
        description: 'Voyage Asie 2014',
        image: 'http://puzzledge.eu/images/icone.png',
        copyright: '2014 Amaury Brisou',
        categories: ['Voyage', 'Asie'],
        rss_update_delay: 60 * 1000,

      },
      select: ['trip-puzzledge-eu']
    }],
    '../../../plugins/hapi-errors': [{}],
  }
}