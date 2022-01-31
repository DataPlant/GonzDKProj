const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partySchema = new Schema({
    partyname: String,
    location: String,
    poster: String,
    content: String,
    posts: [{ type:mongoose.Types.ObjectId, ref: 'Post'}]
})

const Parties = mongoose.model('Parties', partySchema);

module.exports = Parties;
