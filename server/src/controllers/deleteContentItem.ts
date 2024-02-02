import { Request, Response } from "express";
import contentItemModel from "../model/contentItemModel";

export default async (req: Request, res: Response) => {
    const id = req.params.id;

    console.log(id);

    const contentItem = await contentItemModel.findByIdAndDelete(id);
    res.json(contentItem);
}