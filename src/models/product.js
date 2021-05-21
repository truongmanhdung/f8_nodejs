const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    name_product: { type: String, default: 'hahaha' },
    price: { type: Number, default: 15500000},
    description: { type: String, maxlength: 600 , default:'Sản phẩm chưa có chi tiết'},
    image: { type: String, default:''},
    price_sale: { type: Number, default: 15},
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product)