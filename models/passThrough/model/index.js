import { CommonModel } from '../../common/CommonModel'
import config from '../../../config/server.config'
import { addQueryParam } from '../../modelUtil'
const {
    apiUrl
} = config

export class passThroughModel extends CommonModel {
    //post透传
    postPassThrough(url,param={},query={},csmToken) {
        const passUrl = addQueryParam(`${apiUrl}${url}`,query);
        return this.fetch(passUrl,param,'POST',{csmToken})
    }

    //get透传
    getPassThrough(url,param={},query={},csmToken) {
        const passUrl = addQueryParam(`${apiUrl}${url}`,{...query,...param});
        return this.fetch(passUrl,{},'GET',{csmToken})
    }

    //delete透传
    deletePassThrough(url,param={},query={},csmToken) {
        const passUrl = `${apiUrl}${url}`;
        return this.fetch(passUrl,{...query,...param},'DELETE',{csmToken})
    }

    //put透传
    putPassThrough(url,param={},query={},csmToken) {
        const passUrl = addQueryParam(`${apiUrl}${url}`,query);
        return this.fetch(passUrl,param,'PUT',{csmToken})
    }
}