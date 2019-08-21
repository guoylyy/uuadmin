export class ApiController{
    constructor (app) {
        this.app = app
    }

    getParam (req, name) {
        return req.body[name] || req.query[name] || req.params[name]
    }

    cors (req, res) {
        res.set('Access-Control-Allow-Origin', req.headers.origin)
    }

}