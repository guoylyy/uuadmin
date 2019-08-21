import express from 'express';
import getReactResource from '../getReactResource';
import serverConfig from '../../config/server.config';
import initSSRData from './initSSRData';
const router = express.Router();

router.get('/', function (req, res) {
    const id = req.query.id || 0;
    const serverData = { ...serverConfig }
    serverData.title = '友班'
    let apiData = { id: id, cookies: req.cookies }
    apiData = initSSRData(apiData)
    const resource = getReactResource('youBan', serverData, apiData)
    res.render('index', resource)

})

module.exports = router
