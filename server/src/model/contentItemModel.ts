import mongoose from "mongoose";

const contentItemSchema = new mongoose.Schema({
    title_num: Number,
    chapter: String,
    title: String,
    variations: [{
        variationName: String,
        variationCode: String,
        variationDesc: String,
    }],
    tags: [String]
});

const contentItemModel = mongoose.model('contentItems', contentItemSchema);

export default contentItemModel;