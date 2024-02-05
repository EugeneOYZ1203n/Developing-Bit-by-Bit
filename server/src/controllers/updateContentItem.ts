import { Request, Response } from "express";
import contentItemModel from "../model/contentItemModel";
import mongoose from "mongoose";

export default async (req: Request, res: Response) => {
    const id = req.params.id;
    const {title_num, chapter, title, variations, tags} = req.body;

    if (isNaN(title_num) || chapter === "" || title === "" || !Array.isArray(variations) || variations.length <= 0){
        res.status(400).send('Invalid inputs');
        return;
    }

    const contentItem = await contentItemModel.findById(id);

    if (!contentItem) return res.status(400).send(`cannot find contentItem of id ${id}`)

    contentItem.title_num = title_num;
    contentItem.chapter = chapter;
    contentItem.title = title;
    contentItem.variations = new mongoose.Types.DocumentArray(variations);
    contentItem.tags = tags;

    const newContentItem = await contentItem.save();
    res.json(newContentItem);
}