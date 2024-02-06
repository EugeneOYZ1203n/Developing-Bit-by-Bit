export default (data:Array<{
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
    if (!searchString){
        return data;
    }

    console.log(searchString)

    const searchTerms = searchString.toLowerCase().split(",");
    searchTerms.forEach((el,index)=>{searchTerms[index]=el.trim()})

    const filtered = data.filter((titleData)=>{
        const stringToCheckIncludes = [
            titleData.chapter, 
            titleData.title, 
            //@ts-ignore
            ...titleData.variations.reduce((acc, el)=>{acc.push([el.variationName.trim(), el.variationDesc.trim()].join(' ')); return acc}, Array<String>(0)),
            ...titleData.tags].join(' ').toLowerCase().trim();
        
        console.log(stringToCheckIncludes)
        console.log(searchTerms)

        return searchTerms.some((value)=>stringToCheckIncludes.includes(value));
    })

    return filtered
}