import { useState } from 'react';
import './ContentItem.css';
import './EditContentItemForm.css'
import "./hljsCustomTheme.css"
import ReactTextareaAutosize from 'react-textarea-autosize';


export default ({titleData, closeFunction}:{titleData: {
    title_num: Number,
    chapter: string,
    title: string,
    variations: Array<{
        variationName: string,
        variationCode: string,
        variationDesc: string,
    }>,
    tags: Array<string>
}, closeFunction : Function}) => {

    const [editedTitleData, setEditedTitleData] = useState(JSON.parse(JSON.stringify(titleData)));

    return (
        <div className='BlackBackground'>
            <form className='EditContentItemForm'>
                <h1>Edit Content</h1>
                <div className='ChapterIndexDiv'>
                    <input className='chapterInputField' type='text' value={editedTitleData.chapter} placeholder='Chapter' onChange={(e)=>
                        setEditedTitleData({...editedTitleData,chapter: e.target.value})
                    }/>

                    <input className='indexInputField' type='number' value={editedTitleData.title_num} placeholder='Index' onChange={(e)=>
                        setEditedTitleData({...editedTitleData,title_num: e.target.value})
                    }/>
                </div>
                <input className='titleInputField' type='text' value={editedTitleData.title} placeholder='Title' onChange={(e)=>
                    setEditedTitleData({...editedTitleData,title: e.target.value})
                }/>
                
                <ReactTextareaAutosize className='tagsInputField' value={
                    editedTitleData.tags.join(', ')
                    } placeholder='Tags' onChange={(e)=>
                        setEditedTitleData({...editedTitleData,tags: e.target.value.split(", ")})
                    }/>

                {editedTitleData.variations.map((variation:{variationName: string, variationCode: string, variationDesc: string}, index:number)=>{return(
                    <div className='VariationDiv'>
                        <input type='text' value={variation.variationName as string | number | readonly string[] | undefined} placeholder='Variation Name' onChange={(e)=>{
                            let tmp = editedTitleData.variations;
                            tmp[index].variationName = e.target.value;
                            setEditedTitleData({...editedTitleData,variations: tmp});
                        }}/>
                        <ReactTextareaAutosize value={variation.variationDesc as string | number | readonly string[] | undefined} placeholder='Variation Description' onChange={(e)=>{
                            let tmp = editedTitleData.variations;
                            tmp[index].variationDesc = e.target.value;
                            setEditedTitleData({...editedTitleData,variations: tmp});
                        }}/>
                        <ReactTextareaAutosize id='codeblockEdit' value={variation.variationCode as string | number | readonly string[] | undefined} placeholder='Variation Code' onChange={(e)=>{
                            let tmp = editedTitleData.variations;
                            tmp[index].variationCode = e.target.value;
                            setEditedTitleData({...editedTitleData,variations: tmp});
                        }} />
                        {editedTitleData.variations.length > 1 ?
                            <button type='button' className='editButton' onClick={()=>{
                                let tmp = editedTitleData.variations;
                                tmp.splice(index, 1);
                                setEditedTitleData({...editedTitleData,variations: tmp});
                            }}>{"[ delete ]"}</button> 
                        : null}
                    </div>
                )})}

                <button type='button' className='editButton' onClick={()=>{
                    let tmp = editedTitleData.variations;
                    tmp.push({
                        variationName: "", variationCode: "", variationDesc: ""
                    });
                    setEditedTitleData({...editedTitleData,variations: tmp});
                }}>{"[ add ]"}</button> 

                <button className="SubmitButton" type="submit" onClick={(e)=>{
                    e.preventDefault();
                    //Some API call
                    closeFunction();
                }}>Apply</button>
                <button type='button' className='CancelButton' onClick={()=>{
                    closeFunction();
                }}>Cancel</button>
            </form>
        </div>
    )
}

