import filterApiDataBySearch from "./filterApiDataBySearch";
import sortApiData from "./sortApiData"

export default (data:Array<{
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
}>, searchString: string) => {
    if (typeof data == 'undefined' || !data){
        return data;
    }

    sortApiData(data);

    const filtered = filterApiDataBySearch(data, searchString);

    let res : Array<{name: string, titles: Array<{titleName: string, _id: string}>}> = [];

    filtered.forEach((titleData)=>{
        if (res.length == 0 || res[res.length-1].name != titleData.chapter){
            res.push({
                name: titleData.chapter,
                titles: [{
                    titleName: titleData.title,
                    _id: titleData._id
                }]
            })
            return;
        }
        res[res.length-1].titles.push({
            titleName: titleData.title,
            _id: titleData._id
        });
    })

    return res;
}
