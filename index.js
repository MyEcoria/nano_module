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
  accountCreate: (apiKey, coin, wallet) => {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        url: `https://nodes.myecoria.com/${coin}`,
        headers: {
          'x-auth-key': apiKey
        },
        json: {
          action: 'account_create',
          wallet: wallet
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
  send: (apiKey, coin, wallet, source, destination, amount) => {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        url: `https://nodes.myecoria.com/${coin}`,
        headers: {
          'x-auth-key': apiKey
        },
        json: {
          action: 'send',
          wallet: wallet,
          source: source,
          destination: destination,
          amount: amount
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
