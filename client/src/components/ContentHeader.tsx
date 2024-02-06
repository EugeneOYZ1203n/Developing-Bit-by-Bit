import { useState } from 'react';
import './ContentHeader.css';

export default ({chapter}:{chapter: {name: string, titles: Array<{titleName: string, _id: string}>}}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="ContentHeader">
            <div className="accordion" onClick={()=>setExpanded(!expanded)}>
                <p>{chapter.name}</p>
                <p>{expanded? "-" : "+"}</p>
            </div>

            <div className={expanded ? 'titlesList' : 'titlesList hide'}>
                {chapter.titles.map((title: {titleName: string, _id: string})=>{
                    return (
                    <div key={title._id} className='titleGroup'>
                        <a href={`#${title.titleName}`}><p>{title.titleName}</p></a>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}