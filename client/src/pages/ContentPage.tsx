import './ContentPage.css';

import MainContentPanel from '../components/MainContentPanel'
import Sidebar from '../components/Sidebar'
import { createContext, useState } from 'react';

export const SearchContext = createContext(null)

export default () => {

    const [searchString, setSearchString] = useState(null)

    return (
        <div className='ContentPage'>
            {/*@ts-ignore*/}
            <SearchContext.Provider value={[searchString, setSearchString]}>
                <Sidebar />
                <MainContentPanel />
            </SearchContext.Provider>
        </div>
    )
}