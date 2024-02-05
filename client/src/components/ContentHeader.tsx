import { useState } from 'react';
import './ContentHeader.css';

export default ({chapter, isAdmin}:{chapter: {name: string, titles: Array<string>}, isAdmin:Boolean}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="ContentHeader">
            <div className="accordion" onClick={()=>setExpanded(!expanded)}>
                <p>{chapter.name}</p>
                <p>{expanded? "-" : "+"}</p>
            </div>

            <div className={expanded ? 'titlesList' : 'titlesList hide'}>
                {chapter.titles.map((title: string, i)=>{
                    return (
                    <div key={title+String(i)} className='titleGroup'>
                        <a href={`#${title}`}><p>{title}</p></a>
                        {isAdmin?<button className='editButton'>{"\[ delete \]"}</button>:null}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}