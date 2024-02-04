import './MainContentPanel.css'

import ContentItem from './ContentItem'

export default () => {
    const data = [{
        chapter_num: 1,
        title_num: 1,
        title: "Binary Search",
        variations: [{
            variationName: "Javascript",
            variationCode: "for (let i = 0; i < n; i++){\n   binarySearch()\n}",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        },{
            variationName: "Python",
            variationCode: "for i in range(n):\nbinarySearch()",
            variationDesc: "Binary search allows you to ...",
        }],
        tags: ["Algorithms", "Javascript","Algorithms", "Javascript","Algorithms", "Javascript","Algorithms", "Javascript","Algorithms", "Javascript","Algorithms", "Javascript","Algorithms", "Javascript","Algorithms", "Javascript"]
    }]


    return (
        <div className="MainContentPanel">
            {data.map((titleData, index)=> {
                return <ContentItem key={index} isAdmin={true} titleData={titleData}/>
            })}
            
            
        </div>
    )
}