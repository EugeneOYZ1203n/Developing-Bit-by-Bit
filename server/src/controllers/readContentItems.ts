import { Request, Response } from "express";
import contentItemModel from "../model/contentItemModel";

export default async (req: Request, res: Response) => {
    const contentItems = await contentItemModel.find();
    res.json(contentItems);
}