import './MainContentPanel.css'

import ContentItem from './ContentItem'
import EditContentItemForm from './EditContentItemForm'

export default () => {
    const data = [{
        title_num: 1,
        chapter: "Algorithms",
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
        title_num: 2,
        chapter: "Algorithms",
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
            <EditContentItemForm titleData={data[0]} />

            {data.map((titleData, index)=> {
                return <ContentItem key={index} isAdmin={true} titleData={titleData}/>
            })}
        </div>
    )
}