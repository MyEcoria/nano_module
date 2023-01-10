const https = require('https');

const postData = (url,data,apiKey) => {
    let req = https.request({
        host:url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-key': apiKey
        }
    }, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.write(JSON.stringify(data));
    req.end();

    req.on('error', (error) => {
        console.error(error);
    });
}

exports.account_balance = (account, coin,apiKey) => {
    let data = {
        "action": "account_balance",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_block_count = (account, coin, apiKey) => {
    let data = {
        "action": "account_block_count",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_get = (key, coin,apiKey) => {
    let data = {
        "action": "account_get",
        "key": key
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_info = (account, coin,apiKey) => {
    let data = {
        "action": "account_info",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_key = (account, coin, apiKey) => {
    let data = {
        "action": "account_key",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_representative = (account, coin,apiKey) => {
    let data = {
        "action": "account_representative",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.block_account = (hash, coin, apiKey) => {
    let data = {
        "action": "block_account",
        "hash": hash
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}
exports.block_count = (coin, apiKey) => {
    let data = {
        "action": "block_count"
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.block_info = (hash, json_block, coin, apiKey) => {
    let data = {
        "action": "block_info",
        "hash": hash,
        "json_block": json_block
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.delegators_count = (account, coin, apiKey) => {
    let data = {
        "action": "delegators_count",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.receivable = (account, count, coin, apiKey) => {
    let data = {
        "action": "receivable",
        "account": account,
        "count": count
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_create = (wallet, coin, apiKey) => {
    let data = {
        "action": "account_create",
        "wallet": wallet
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_list = (wallet, coin, apiKey) => {
    let data = {
        "action": "account_list",
        "wallet": wallet
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.account_representative_set = (wallet, account, representative, coin, apiKey) => {
    let data = {
        "action": "account_representative_set",
        "wallet": wallet,
        "account": account,
        "representative": representative
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.receive = (wallet, account, block, coin, apiKey) => {
    let data = {
        "action": "receive",
        "wallet": wallet,
        "account": account,
        "block": block
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.send = (wallet, source, destination, amount, id, coin, apiKey) => {
    let data = {
        "action": "senhttps://d",
        "wallet": wallet,
        "source": source,
        "destination": destination,
        "amount": amount,
        "id": id
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.unchecked = (count, coin, apiKey) => {
    let data = {
        "action": "unchecked",
        "count": count
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}

exports.validate_account_number = (account, coin, apiKey) => {
    let data = {
        "action": "validate_account_number",
        "account": account
    }
    let url =`https://nodes.myecoria.com/${coin}`;
    postData(url,data,apiKey);
}
