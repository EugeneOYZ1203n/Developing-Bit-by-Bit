import { useState } from 'react';
import './ContentHeader.css';

export default ({chapter, isAdmin}:{chapter: {name: String, titles: Array<String>}, isAdmin:Boolean}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="ContentHeader">
            <div className="accordion" onClick={()=>setExpanded(!expanded)}>
                <p>{chapter.name}</p>
                <p>{expanded? "-" : "+"}</p>
            </div>

            <div className={expanded ? 'titlesList' : 'titlesList hide'}>
                {chapter.titles.map((title: String, i)=>{
                    return (
                    <div key={title+String(i)} className='titleGroup'>
                        <a><p>{title}</p></a>
                        {isAdmin?<button className='editButton'>{"\[ delete \]"}</button>:null}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}