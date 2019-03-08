/**
 * Project base configuration
 *  @token
 *  @clearToken in localstorage
 *  @baseUrl project client to client base URL 
 */
let token = null;

export default class Util {

  static get logoUrl(){
    return "http://qiniuprivate.gambition.cn/rgHxWu_uband_logo.png";
  }

  static get baseUrl() {
    if(process.env.NODE_ENV === 'producation'){
      return "/";  
    }else{
      return 'http://localhost:3000/';
    }
  }

  static get token() {
    if(process.env.NODE_ENV === 'producation'){
      if (token === null) {
        let storage = localStorage.getItem("token");
        if (storage == null) {
          return null;
        }
        token = JSON.parse(storage).data;
      }
    }else{
      token = 'eyJpZCI6MTM0NCwiaWF0IjoxNTQ2Mzk5OTkwLCJleHAiOjE1NDcwMDQ3OTB9.PkCjLXz6p1wRub_uC3t-vC0ys2tD5BacxLjFf-EBYWkHa7RZT95xTWWXppsGsh_7a5TdX4D3Cn8Af2mee8vSgg';
    }
    
    return token;
  }

  static clearToken = () => {
    token = null;
  };

  static get isProduct() {
    if(process.env.NODE_ENV === 'producation'){
      return true;
    }else{
      return false;
    }
  }

}