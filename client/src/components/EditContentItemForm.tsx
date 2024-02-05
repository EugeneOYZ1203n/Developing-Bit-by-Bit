import { useEffect, useState } from 'react';
import './ContentItem.css';
import './EditContentItemForm.css'
import "./hljsCustomTheme.css"
import hljs from "highlight.js"
import ReactTextareaAutosize from 'react-textarea-autosize';


export default ({titleData}:{titleData: {
    title_num: Number,
    chapter: String,
    title: String,
    variations: Array<{
        variationName: String,
        variationCode: String,
        variationDesc: String,
    }>,
    tags: Array<String>
}}) => {

    const [editedTitleData, setEditedTitleData] = useState(JSON.parse(JSON.stringify(titleData)));
    
    return (
        <div className='BlackBackground'>
            <form className='EditContentItemForm'>
                <h1>Edit Content</h1>
                <div className='ChapterIndexDiv'>
                    <input className='chapterInputField' type='text' placeholder='Chapter'/>
                    <input className='indexInputField' type='number' placeholder='Index'/>
                </div>
                <input className='titleInputField' type='text' placeholder='Title'/>
                
                <ReactTextareaAutosize className='tagsInputField' placeholder='Tags'/>

                {editedTitleData.variations.map(()=>{return(
                    <div className='VariationDiv'>
                        <input type='text' placeholder='Variation Name'/>
                        <ReactTextareaAutosize placeholder='Variation Description'/>
                        <ReactTextareaAutosize placeholder='Variation Code'/>
                        <button className='editButton'>{"[ delete ]"}</button>
                    </div>
                )})}

                <button className="SubmitButton" type="submit">Apply</button>
                <button className='CancelButton'>Cancel</button>
            </form>
        </div>
    )
}

