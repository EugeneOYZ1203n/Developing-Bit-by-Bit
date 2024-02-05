export default (data:Array<{
    title_num: Number,
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

    return data.sort((a,b)=>{
        //Chapter Alphabetically Sorted
        if (a.chapter < b.chapter) {
            return -1;
        }
        if (a.chapter > b.chapter) {
        return 1;
        }
        
        return Number(a.title_num) - Number(b.title_num)
    })
}

