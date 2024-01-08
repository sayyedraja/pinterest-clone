const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/nayaappforme")
const userSchema = new mongoose.Schema({
postText: {
type: String,
required: true
},
image:{
    type:String
},
user:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
}],
createdAt:{
    type: Date,
    default: Date.now,
},
likes:{
    type:Array,
    default: [],
} ,


});

module.exports = mongoose.model('post', userSchema);


