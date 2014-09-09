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
      labels: 'puzzledge',
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
      labels: 'trip-puzzledge',
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
    '../../../plugins/blog.puzzledge': [{
      options: {
        sitename: "Puzzledge.org",
        author: "Amaury Brisou",
        url: 'http://puzzledge.org',
        description: 'IT news',
        image: 'http: //puzzledge.org/images/icone.png',
        copyright: '2014 Amaury Brisou',
        categories: ['Computer Science', 'IT'],
        rss_update_delay: 300 * 1000,

        consumer_key: ' ',
        consumer_secret: ' ',
        access_token_key: ' ',
        access_token_secret: ' ',

        twitter_update_delay: 300 * 1000,
      },
      select: ['puzzledge']
    }],
    '../../../plugins/trip.puzzledge': [{
      options: {
        sitename: "trip.puzzledge.org",
        author: "Amaury Brisou",
        url: 'http://localhost:8081',
        //url: 'http://trip.puzzledge.org',
        description: 'Voyage Asie 2014',
        image: 'http://puzzledge.org/images/icone.png',
        copyright: '2014 Amaury Brisou',
        categories: ['Voyage', 'Asie'],
        rss_update_delay: 300 * 1000,

      },
      select: ['trip-puzzledge']
    }],
    '../../../plugins/hapi-comments': [{
      options: {
        dbUrl: 'mongodb://127.0.0.1:27017/',
        dbName: 'puzzledge',
        drop: true,
        mail: {
          from: 'mail from',
          smtpServer: 'smpt server',
          smtpPort: 587,
          auth: {
            user: 'your username',
            pass: 'you password'
          }
        }
      },
      route: {
        prefix: '/comments'
      },
      //select: ['trip-puzzledge-eu']
    }],
    '../../../plugins/hapi-errors': [{}],
  }
}