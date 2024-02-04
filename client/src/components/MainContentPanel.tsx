import './MainContentPanel.css'

import ContentItem from './ContentItem'

export default () => {
    const data = [{
        chapter_num: 1,
        title_num: 1,
        title: "Binary Search",
        variations: [{
            variationName: "Javascript",
            variationCode: "for (let i = 0; i < n; i++){\n\tbinarySearch()\n}",
            variationDesc: "A way to quickly find elements in a sorted array",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\n\tbinarySearch()",
            variationDesc: "Binary search allows you to python easy",
        }],
        tags: ["Algorithms", "Javascript"]
    },{
        chapter_num: 1,
        title_num: 2,
        title: "Binary Search",
        variations: [{
            variationName: "Javascript",
            variationCode: "for (let i = 0; i < n; i++){\n\tbinarySearch()\n}",
            variationDesc: "A way to quickly find elements in a sorted array",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\n\tbinarySearch()",
            variationDesc: "Binary search allows you to python easy",
        }],
        tags: ["Algorithms", "Javascript"]
    }]


    return (
        <div className="MainContentPanel">
            {data.map((titleData, index)=> {
                return <ContentItem key={index} isAdmin={true} titleData={titleData}/>
            })}
        </div>
    )
}