import './Sidebar.css';

import SearchBar from './SearchBar';
import ContentHeader from './ContentHeader';

import { BarLoader } from 'react-spinners'

import readContentItemsRequest from '../api/readContentItemsRequest'
import { useQuery } from 'react-query'
import { TokenContext } from '../App'
import { useContext } from 'react';
import getChaptersList from '../helperFunctions/getChaptersList';
import { SearchContext } from '../pages/ContentPage';

export default () => {
    //@ts-ignore
    const [token, setToken] = useContext(TokenContext);
    const {isLoading, data: data} = useQuery('contentitem', 
        () => readContentItemsRequest(token)
    )

    //@ts-ignore
    const [searchString, setSearchString] = useContext(SearchContext)

    const chapters : Array<{name: string, titles: Array<string>}> = getChaptersList(data, searchString)

    const isAdmin = true;

    return (
        <div className="Sidebar">
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
                    {isAdmin ? <div><button className='editButton addButton'>{"\[ add new title \]"}</button></div>: null}
                </div>  
            }
        </div>
    )
}