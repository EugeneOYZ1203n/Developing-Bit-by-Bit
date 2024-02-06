import { API_URL } from "./config";

export default (token:string, titleData : {
    _id: string,
    title_num: Number,
    chapter: string,
    title: string,
    variations: Array<{
        variationName: string,
        variationCode: string,
        variationDesc: string,
    }>
    tags: Array<string>,
}) => {
    return fetch(`${API_URL}/content`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(titleData)
    })
    .then(res => res.json());
}