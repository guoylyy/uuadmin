import igameBase from 'igame_base_libs';
const {
    HarfUtil,
    CookieUtil
} = igameBase

const FETCH_TIMEOUT = 20000
const ERR_CODE = 1024
const ERR_MSG = '网络异常，请稍后再试'

export function ajax(url = '', params = {}, method = 'POST',outside=false,type = '') {
    let init = { method, credentials: 'include' }
    if (method.toLowerCase() === 'get') {
        if (HarfUtil.toQueryString(params)) {
            url = url + '?' + HarfUtil.toQueryString(params)
        }
    } else if (method.toLowerCase() === 'post') {
        init = Object.assign(init, {
            headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: HarfUtil.toQueryString(params)
        })
    } else {
        return false
    }

    if(!outside){
        url = `${HarfUtil.getOrigin()}/_api/` + url
    }else{
        init.mode = 'cors'
    }

    if(type === 'file'){
        delete init.credentials
        const csmToken = CookieUtil.get('csmToken');
        init.headers = { csmToken };
        init.body = params;
    }

    return Promise.race([
        new Promise((resolve, reject) => {
            fetch(url, init)
                .then(res => res.json())
                .then((response) => {
                    if (response.code === 0) {
                        resolve(response)
                    } else if(response.code === 404 || response.code === 401){
                        window.location.href = `${HarfUtil.getOrigin()}/login`
                        return false;
                    } else {
                        if(response.code){
                            reject(response)
                        }else{
                            reject({ code: ERR_CODE, msg: ERR_MSG })
                        }
                    }
                })
                .catch((err) => {
                    reject({ code: ERR_CODE, msg: ERR_MSG, err })
                })
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({ code: ERR_CODE, msg: ERR_MSG })
            }, FETCH_TIMEOUT)
        })
    ])
}
