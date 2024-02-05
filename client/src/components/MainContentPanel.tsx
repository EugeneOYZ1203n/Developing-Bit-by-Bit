import './MainContentPanel.css'

import ContentItem from './ContentItem'
import EditContentItemForm from './EditContentItemForm'
import { useContext, useState } from 'react'

import { BarLoader } from 'react-spinners'

import readContentItemsRequest from '../api/readContentItemsRequest'
import { useQuery } from 'react-query'
import { TokenContext } from '../App'
import sortApiData from '../helperFunctions/sortApiData'

export default () => {
    const [editIndex, setEditIndex] = useState(-1);

    //@ts-ignore
    const [token, setToken] = useContext(TokenContext);
    const {isLoading, data: data} = useQuery('contentitem', 
        () => readContentItemsRequest(token)
    )

    sortApiData(data);

    return (
        <div className="MainContentPanel">
            {editIndex !== -1 ?
                <EditContentItemForm titleData={data![editIndex]} closeFunction={()=>setEditIndex(-1)}/>    
            : null}

            {isLoading ? 
                <BarLoader/>    
            :
                <div>{ data.map((titleData:{
                    title_num: Number,
                    chapter: string,
                    title: string,
                    variations: Array<{
                        variationName: string,
                        variationCode: string,
                        variationDesc: string,
                    }>,
                    tags: Array<string>
                }, index: number)=> {
                    return <ContentItem key={index} editFunction={()=>setEditIndex(index)} isAdmin={true} titleData={titleData}/>
                })}</div>
            }
        </div>
    )
}