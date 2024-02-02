import { Request, Response } from "express";
import contentItemModel from "../model/contentItemModel";

export default async (req: Request, res: Response) => {
    const {chapter, title, variations, tags} = req.body;

    if (chapter === "" || title === "" || !Array.isArray(variations) || variations.length <= 0){
        res.status(400).send('Invalid inputs');
        return;
    }

    const contentItem = new contentItemModel({
        chapter, 
        title,
        variations,
        tags
    })

    const newContentItem = await contentItem.save();
    res.json(newContentItem);
}