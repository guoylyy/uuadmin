import { Router } from 'express'
const router = Router()
import models from '../../models'
import app from '../../app'
import { passThroughModel } from '../../models/passThrough/model'
const {
    IndexController,
} = models

router.all('/:controller/:action', (req, res, next) => {
    res.set('Cache-Control', 'no-cache')
    var _ctrl = req.params.controller
    var _act = req.params.action
    var controller = null
    switch (_ctrl) {
        case 'index':
            controller = new IndexController(app)
            break
        default:
            res.status(500).send('Invalid Api ' + req.path)
            return
    }
    let funcName = _act + 'Action';
    new Promise((resolve, reject) => {
        if (typeof controller[funcName] === 'function') {
            resolve()
        } else {
            reject(new Error('Invalid Api ' + req.path))
        }
    })
        .then(() => controller[funcName](req, res))
        .then(resp => {
            return res.send(resp)
        })
        .catch(err => {
            if(err.stack){
                return res.status(500).send(err.message ? err.message : err)
            }else{
                return res.send(err)
            }
        })
})

router.all('/pass/:action/:url(\\S+)', (req, res, next) => {
    const action = req.params.action
    const url = req.params.url;
    const csmToken = req.cookies.csmToken || '';
    if(action === 'get'){
        new passThroughModel(app).getPassThrough(url,req.body,req.query,csmToken).then((data)=> { return res.send(data) } ).catch((err)=>{return res.send(err)})
    }else if(action === 'post'){
        new passThroughModel(app).postPassThrough(url,req.body,req.query,csmToken).then((data)=> { return res.send(data) }).catch((err)=>{return res.send(err)})
    }else if(action === 'delete'){
        new passThroughModel(app).deletePassThrough(url,req.body,req.query,csmToken).then((data)=> { return res.send(data) }).catch((err)=>{return res.send(err)})
    }else if(action === 'put'){
        new passThroughModel(app).putPassThrough(url,req.body,req.query,csmToken).then((data)=> { return res.send(data) }).catch((err)=>{return res.send(err)})
    }
})


module.exports = router
