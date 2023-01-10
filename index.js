const request = require('request');

module.exports = {
  accountBalance: (apiKey, coin, account) => {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        url: `https://nodes.myecoria.com/${coin}`,
        headers: {
          'x-auth-key': apiKey
        },
        json: {
          action: 'account_balance',
          account: account
        }
      };
    
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.stringify(body));
        }
      });
    });
  },
  accountBlockCount: (apiKey, coin, account) => {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        url: `https://nodes.myecoria.com/${coin}`,
        headers: {
          'x-auth-key': apiKey
        },
        json: {
          action: 'account_block_count',
          account: account
        }
      };
    
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.stringify(body));
        }
      });
    });
  },
  accountGet: (apiKey, coin, key) => {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        url: `https://nodes.myecoria.com/${coin}`,
        headers: {
          'x-auth-key': apiKey
        },
        json: {
          action: 'account_get',
          key: key
        }
      };
    
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.stringify(body));
        }
      });
    });
  }
};
