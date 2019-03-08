import { observable, action, computed } from "mobx";

import {httpGet, httpPost } from "../../service/http.service"

/**
 * Define a User Object
 */
class User {
    @observable info = {};

    constructor(){
        console.log("test");
    }

    @action
    setInfo = (data) =>{
        this.info = data;
    }
}
export default new User();