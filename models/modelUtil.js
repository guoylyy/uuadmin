import crypto from "crypto";
function md5(text) {
    return crypto.createHash('md5').update(text).digest('hex');
};

//去除空参数
export function removeNullParam(param) {
    Object.keys(param).forEach(key => param[key] === undefined && delete param[key]);
    return param;
}

export function addQueryParam(url, obj) {
    let retUrl = url
    const strQuery = toQueryString(obj)
    const hasQuest = (url.indexOf('?') >= 0)
    if (hasQuest) {
        retUrl = retUrl + '&' + strQuery
    } else {
        retUrl = retUrl + '?' + strQuery
    }
    return retUrl
}