const pkg = require('../package')
const path = require('path')
const development = {

}

const fat = {

}

const production = {

}
const argv = process.argv;
const env = process.env.NODE_ENV || pkg.config.env.toLowerCase()
const envConfigMap = { development, fat, production }
const envConfig = envConfigMap[env] || envConfigMap.production
const port = argv[argv.length-1];
const logPath = `/data/logs/pm2/${pkg.name}_${port}`;
const config = Object.assign({
    port:port,
    appName: `${pkg.name}_${port}`,
    logPath: env === 'development' ? path.resolve(process.cwd(),`..${logPath}`) : logPath,
    title: 'Uband友班',
    description: 'uband,友班,友班英文,友班编程,友币,uband友班,英语教学,翻转学堂,Gambition,甘比,甘比英文',
    keywords: 'uband,友班,友班英文,友班编程,友币,uband友班,英语教学,翻转学堂,Gambition,甘比,甘比英文',
}, envConfig)

module.exports = config

