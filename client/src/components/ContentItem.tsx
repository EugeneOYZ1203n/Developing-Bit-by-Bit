import { useEffect, useState } from 'react';
import './ContentItem.css';
import "./hljsCustomTheme.css"
import hljs from "highlight.js"

export default ({titleData, isAdmin}:{titleData: {
    chapter_num: Number,
    title_num: Number,
    chapter: String,
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
        const codeBlock = document.getElementById(`Code-Block-${titleData.chapter_num}-${titleData.title_num}`);
        console.log(codeBlock)
        
        codeBlock!.removeAttribute("data-highlighted");
        hljs.highlightElement(codeBlock!)
    }, [variationIndex])
    
    return (
        <div className="ContentItem">
            <div className='ContentItem-HorizontalFlexBox'>
                <h2>{titleData.title} {isAdmin?<button className='editButton'>{"\[ edit \]"}</button>:null}</h2>
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

            <pre><code id={`Code-Block-${titleData.chapter_num}-${titleData.title_num}`}>
                {titleData.variations[variationIndex].variationCode}
            </code></pre>

            <div className='tagsList'>
                {titleData.tags.map((tag)=>{return<p>{tag}</p>})}
            </div>

        </div>
    )
}