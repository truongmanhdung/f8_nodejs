module.exports = {
    multipleMongooseToObject: function(mongooseArr){
        return mongooseArr.map(mongooseArr => mongooseArr.toObject())
        product = product.map(product => product.toObject())//biến thành mảng thì mới truyền đc sang bên kia
    },
    mongooseToObject: function (mongooseArr){
        return mongooseArr ? mongooseArr.toObject() : mongooseArr;
    }
};
