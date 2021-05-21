const product = require("../../models/product")
const {multipleMongooseToObject} = require("../../util/mongooes")
class SiteController {
    index(req, res, next){
        product.find({})
        .then(product => {
            res.render('home',{
                product: multipleMongooseToObject(product),
            })
        })
        .catch(next);
    }
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController;