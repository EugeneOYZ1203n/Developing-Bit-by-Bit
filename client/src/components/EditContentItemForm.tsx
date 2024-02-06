import { useContext, useState } from 'react';
import './ContentItem.css';
import './EditContentItemForm.css'
import "./hljsCustomTheme.css"
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useMutation, useQueryClient } from 'react-query';
import createContentItemRequest from '../api/createContentItemRequest';
import { TokenContext } from '../App';
import updateContentItemRequest from '../api/updateContentItemRequest';


export default ({titleData, closeFunction}:{titleData: {
    _id: string,
    title_num: number,
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
    
    let inputFieldValidity = true;

    const chapterAndIndexInput = (
        <div className='ChapterIndexDiv'>
            <input className='chapterInputField' type='text' value={editedTitleData.chapter} placeholder='Chapter' onChange={(e)=>
                setEditedTitleData({...editedTitleData,chapter: e.target.value})
            }/>

            <input className='indexInputField' type='number' min={1} value={editedTitleData.title_num} placeholder='Index' onChange={(e)=>
                setEditedTitleData({...editedTitleData,title_num: e.target.value})
            }/>
        </div>
    )

    const titleInput = (
        <input className='titleInputField' type='text' value={editedTitleData.title} placeholder='Title' onChange={(e)=>
            setEditedTitleData({...editedTitleData,title: e.target.value})
        }/>
    )

    const tagsInput = (
        <ReactTextareaAutosize className='tagsInputField' value={
            editedTitleData.tags.join(', ')
            } placeholder='Tags' onChange={(e)=>
                setEditedTitleData({...editedTitleData,tags: e.target.value.split(", ")})
            }/>
    )

    const variationNameInput = (variation: {variationName: string, variationCode: string, variationDesc: string}, index: number)=>(
        <input type='text' value={variation.variationName as string | number | readonly string[] | undefined} placeholder='Variation Name' onChange={(e)=>{
            let tmp = editedTitleData.variations;
            tmp[index].variationName = e.target.value;
            setEditedTitleData({...editedTitleData,variations: tmp});
        }}/>
    )

    const variationDescInput = (variation: {variationName: string, variationCode: string, variationDesc: string}, index: number)=>(
        <ReactTextareaAutosize value={variation.variationDesc as string | number | readonly string[] | undefined} placeholder='Variation Description' onChange={(e)=>{
            let tmp = editedTitleData.variations;
            tmp[index].variationDesc = e.target.value;
            setEditedTitleData({...editedTitleData,variations: tmp});
        }}/>
    )

    const variationCodeInput = (variation: {variationName: string, variationCode: string, variationDesc: string}, index: number)=>(
        <ReactTextareaAutosize id='codeblockEdit' value={variation.variationCode as string | number | readonly string[] | undefined} placeholder='Variation Code' onChange={(e)=>{
            let tmp = editedTitleData.variations;
            tmp[index].variationCode = e.target.value;
            setEditedTitleData({...editedTitleData,variations: tmp});
        }} />
    )

    const variationDeleteButton = (index: number)=>(
        <span style={{width: "100%"}}>{editedTitleData.variations.length > 1 ?
            <button type='button' className='editButton' onClick={()=>{
                let tmp = editedTitleData.variations;
                tmp.splice(index, 1);
                setEditedTitleData({...editedTitleData,variations: tmp});
            }}>{"[ delete ]"}</button> 
        : null}</span>
    )

    const variationAddButton = (
        <button type='button' className='editButton' onClick={()=>{
            let tmp = editedTitleData.variations;
            tmp.push({
                variationName: "", variationCode: "", variationDesc: ""
            });
            setEditedTitleData({...editedTitleData,variations: tmp});
        }}>{"[ add ]"}</button> 
    )

    const errorDisplay =(
        <div className='errorDisplay'>
            {editedTitleData.chapter == "" ? <div>{inputFieldValidity=false}chapter name required</div> : null}
            {editedTitleData.title == "" ? <div>{inputFieldValidity=false}title name required</div> : null}
            
            {/*@ts-ignore */}
            {editedTitleData.variations.reduce((acc,el)=>acc || el.variationName == "" || el.variationDesc == "" || el.variationCode == "", false) ?
            <div>{inputFieldValidity=false}variations has empty fields</div> : null}
        </div>
    )

    //@ts-ignore
    const [token, setToken] = useContext(TokenContext);

    const queryClient = useQueryClient();
    const {mutate: createContentItem} = useMutation(
        () => createContentItemRequest(token, editedTitleData), 
        {onSettled: () => {queryClient.invalidateQueries('contentitem');}}
    )
    const {mutate: updateContentItem} = useMutation(
        () => updateContentItemRequest(token, editedTitleData), 
        {onSettled: () => {queryClient.invalidateQueries('contentitem');}}
    )

    const submitFormButton = (_id:string)=>(
        <button className="SubmitButton" type="submit" onClick={(e)=>{
            e.preventDefault();

            if (inputFieldValidity){
                if (editedTitleData._id == ""){
                    createContentItem()
                }
                else{
                    updateContentItem()
                }
                closeFunction();
            }
            
        }}>Apply</button>
    )

    const cancelFormButton = (
        <button type='button' className='CancelButton' onClick={()=>{
            closeFunction();
        }}>Cancel</button>
    )

    return (
        <div className='BlackBackground'>
            <form className='EditContentItemForm'>
                <h1>{titleData._id ? "Edit Content" : "Add Content"}</h1>
                
                {chapterAndIndexInput}
                {titleInput}
                {tagsInput}
                
                {editedTitleData.variations.map((variation:{variationName: string, variationCode: string, variationDesc: string}, index:number)=>{return(
                    <div className='VariationDiv' key={index}>
                        {variationNameInput(variation, index)}
                        {variationDescInput(variation, index)}
                        {variationCodeInput(variation, index)}
                        {variationDeleteButton(index)}
                    </div>
                )})}
                {variationAddButton}

                {errorDisplay}

                {submitFormButton(titleData._id)}
                {cancelFormButton}
            </form>
        </div>
    )
}

