import { useContext, useEffect, useState } from 'react';
import './ContentItem.css';
import "./hljsCustomTheme.css"
import hljs from "highlight.js"
import { useMutation, useQueryClient } from 'react-query';
import deleteContentItemRequest from '../api/deleteContentItemRequest';
import { TokenContext } from '../App';
import { confirmPopupInfoContext } from '../pages/ContentPage';

export default ({titleData, editFunction}:{titleData: {
    _id: string,
    title_num: Number,
    chapter: string,
    title: string,
    variations: Array<{
        variationName: string,
        variationCode: string,
        variationDesc: string,
    }>,
    tags: Array<string>
}, editFunction: Function}) => {

    const [variationIndex, setVariationIndex] = useState(0);

    useEffect(()=>{
        const codeBlock = document.getElementById(`Code-Block-${titleData.chapter}-${titleData.title_num}`);
        
        codeBlock!.removeAttribute("data-highlighted");
        hljs.highlightElement(codeBlock!)
    }, [variationIndex])

    //@ts-ignore
    const [token, setToken, isAdmin, setIsAdmin] = useContext(TokenContext);

    //@ts-ignore
    const [confirmPopupInfo, setConfirmPopupInfo] = useContext(confirmPopupInfoContext);

    const queryClient = useQueryClient();
    const {mutate: deleteContentItem} = useMutation(
        () => deleteContentItemRequest(token, titleData._id), 
        {onSettled: () => {queryClient.invalidateQueries('contentitem');}}
    )
    
    return (
        <div className="ContentItem">
            <div className='ContentItem-HorizontalFlexBox'>
                <h2 id={titleData.title}>{titleData.title} 
                    {isAdmin?<button className='editButton' onClick={()=>editFunction()}>{"\[ edit \]"}</button>
                    :null} 
                    {isAdmin?<button className='editButton' onClick={()=>{
                        setConfirmPopupInfo({
                            //@ts-ignore
                            confirmText:"Delete Content?", 
                            confirmButtonText:"Yes", 
                            cancelButtonText:"No", 
                            confirmFunction:()=>{deleteContentItem(); setConfirmPopupInfo(null)}, 
                            cancelFunction:()=>{setConfirmPopupInfo(null)}
                        })
                    }}>{"\[ delete \]"}</button>:null}
                    
                </h2>
                <p>#{`${titleData.chapter}-${titleData.title_num}`}</p>
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

            <pre><code id={`Code-Block-${titleData.chapter}-${titleData.title_num}`}>
                {titleData.variations[variationIndex].variationCode}
            </code></pre>

            <div className='tagsList'>
                {titleData.tags.map((tag)=>{return<p>{tag}</p>})}
            </div>

        </div>
    )
}