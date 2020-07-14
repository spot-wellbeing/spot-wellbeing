require('dotenv').config();

const withSass = require('@zeit/next-sass')

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

module.exports = withSass({});
