import { useEffect, useState } from 'react';
import './ContentItem.css';
import "./hljsCustomTheme.css"
import hljs from "highlight.js"

export default ({titleData, isAdmin}:{titleData: {
    chapter_num: Number,
    title_num: Number,
    title: String,
    variations: Array<{
        variationName: String,
        variationCode: String,
        variationDesc: String,
    }>,
    tags: Array<String>
}, isAdmin:Boolean}) => {

    const [variationIndex, setVariationIndex] = useState(0);

    useEffect(()=>{
        document.querySelector("code")?.removeAttribute("data-highlighted")
        hljs.highlightAll()
    }, [variationIndex])
    
    return (
        <div className="ContentItem">
            <div className='ContentItem-HorizontalFlexBox'>
                <h2>{titleData.title} {isAdmin?<button>{"\[ Edit \]"}</button>:null}</h2>
                <p>#{String(titleData.chapter_num)}-{String(titleData.title_num)}</p>
            </div>

            <div className='buttonList'>
                {titleData.variations.map((variation, index)=>{
                    return <button 
                            className={variationIndex==index?"Selected":""} 
                            key={index} 
                            onClick={() => {setVariationIndex(index);}}>
                                {variation.variationName}
                            </button>
                })}
                <div className='buttonListLast'></div> 
            </div>

            <p className='ContentItem-Description'>
                {titleData.variations[variationIndex].variationDesc}
            </p>

            <pre><code>
                {titleData.variations[variationIndex].variationCode}
            </code></pre>

            <div className='tagsList'>
                {titleData.tags.map((tag)=>{return<p>{tag}</p>})}
            </div>

        </div>
    )
}