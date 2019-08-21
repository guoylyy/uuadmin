import fetch from 'node-fetch';
const FETCH_TIMEOUT = 10000
import querystring from 'querystring';

export class CommonModel{
    constructor(app) {
        this.app = app
        this.error = app.logger.error;
    }

    checkStatus(res,url) {
        if (res.status === 200) {
            return res;
        }
        if (res.status === 555) {
            return new Promise((resolve, reject) =>
                res.text().then(()=>{
                    const error = {code:555,msg:555};
                    reject(error)
                })
            )
        }
        return new Promise((resolve, reject) =>
            res.text().then((data)=>{
                const error = {message:`${res.status}_${url}`,stack:data};
                reject(error)
            })
        )
    }

    sendRequest(url, data = {}, method = 'GET', headers = {}) {
        const query = querystring.stringify(data)
        let head = {};
        const postData = JSON.stringify(data)
        head['Content-Type'] = method === 'POST' ? 'application/json' : 'application/x-www-form-urlencoded; charset=utf-8';
        const options = {
            method: method,
            body: method === 'POST' ? postData : query,
            headers: head
        }
        return Promise.race([
            fetch(url, options)
                .then((res)=>{
                    return  this.checkStatus(res,url);
                })
                .then(res => {
                    return res.json();
                })
                .catch(err => {
                    return new Promise((resolve, reject) => {
                        this.error(JSON.stringify({url,msg:err}));
                        reject(err)
                    })
                }),
            new Promise((resolve, reject) =>
                setTimeout(() => {
                    reject({code: 1024, msg: 'node-fetch request timeout'})
                }, FETCH_TIMEOUT)
            )
        ])
    }

    fetch(api, data = {}, method = 'GET', headers = {}) {
        return this.sendRequest(api, data, method, headers)
            .then(json => {
                this.remoteResponse = json
                return json
            }).then(json => this.processResult(json))
    }

    processResult(resp) {
        return new Promise((resolve, reject) => {
            if (resp && resp.code === 200 ) {
                resolve(resp.data)
            } else {
                reject(resp)
            }
        })
    }
}
