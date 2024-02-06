import './Sidebar.css';

import SearchBar from './SearchBar';
import ContentHeader from './ContentHeader';

import { BarLoader } from 'react-spinners'

import readContentItemsRequest from '../api/readContentItemsRequest'
import { useQuery } from 'react-query'
import { TokenContext } from '../App'
import { useContext, useState } from 'react';
import getChaptersList from '../helperFunctions/getChaptersList';
import { SearchContext } from '../pages/ContentPage';
import EditContentItemForm from './EditContentItemForm';

export default () => {
    //@ts-ignore
    const [token, setToken] = useContext(TokenContext);
    const {isLoading, data: data} = useQuery('contentitem', 
        () => readContentItemsRequest(token)
    )

    //@ts-ignore
    const [searchString, setSearchString] = useContext(SearchContext)

    const chapters : Array<{name: string, titles: Array<{titleName: string, _id: string}>}> = getChaptersList(data, searchString)

    const isAdmin = true;

    const [isAddContent, setIsAddContent] = useState(false)

    return (
        <div className="Sidebar">
            {isAddContent ?
                <EditContentItemForm titleData={{
                    _id: "",
                    title_num: 1,
                    chapter: "",
                    title: "",
                    variations: [{
                        variationName: '',
                        variationCode: '',
                        variationDesc: '',
                    }],
                    tags: ['']
                }} closeFunction={()=>setIsAddContent(false)}/>    
            : null}

            <div className='TopOfSideBar'>
                <div className='Logo'>
                    <p>Developing</p>
                    <h1>Bit by Bit</h1>
                </div>
                <SearchBar />
            </div>

            {isLoading ?
                <BarLoader/>
            :
                <div className='ScrollTitle'>
                    {chapters.map((chapter, i) => {
                        return <ContentHeader chapter={chapter} isAdmin={isAdmin} key={chapter.name+String(i)}/>
                    })}
                    {isAdmin ? <div><button className='editButton addButton' onClick={()=>
                        setIsAddContent(true)
                    }>{"\[ add new title \]"}</button></div>: null}
                </div>  
            }
        </div>
    )
}