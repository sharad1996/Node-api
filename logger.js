const winston = require('winston');

const logger = new winston.createLogger({ // eslint-disable-line
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
})

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}

module.exports = logger;