const mongoose = require('mongoose');

const TimeCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String }
});

const TimeCategory = mongoose.model('TimeCategory', TimeCategorySchema);
module.exports = TimeCategory;
