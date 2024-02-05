import sortApiData from "./sortApiData"

export default (data:Array<{
    title_num: number,
    chapter: string,
    title: string,
    variations: Array<{
        variationName: string,
        variationCode: string,
        variationDesc: string,
}>}>) => {
    if (typeof data == 'undefined'){
        return data;
    }

    sortApiData(data);

    let res : Array<{name: string, titles: Array<string>}> = [];

    data.forEach((titleData)=>{
        if (res.length == 0 || res[res.length-1].name != titleData.chapter){
            res.push({
                name: titleData.chapter,
                titles: [titleData.title]
            })
            return;
        }
        res[res.length-1].titles.push(titleData.title);
    })

    return res;
}
