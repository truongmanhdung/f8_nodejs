const newsRoute = require('./news');
const siteRoute = require('./sites');
function route(app){
    app.use('/new',newsRoute);
    app.use('/',siteRoute);
}

module.exports = route;