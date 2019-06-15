var mongoose = require('mongoose');
var Schema = mongoose.Schema;
KisiSchema = new Schema({
    ad : String,
    soyad : String,
	yas : Number
});
module.exports = mongoose.model('Kisi', KisiSchema);
