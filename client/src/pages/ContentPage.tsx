import './ContentPage.css';

import MainContentPanel from '../components/MainContentPanel'
import Sidebar from '../components/Sidebar'
import { createContext, useState } from 'react';
import ConfirmPopup from '../components/ConfirmPopup';

export const SearchContext = createContext(null)
export const confirmPopupInfoContext = createContext(null)

export default () => {

    const [searchString, setSearchString] = useState(null)
    const [confirmPopupInfo, setConfirmPopupInfo] = useState(null);

    return (
        <div className='ContentPage'>
            {/*@ts-ignore*/}
            <SearchContext.Provider value={[searchString, setSearchString]}>
                {/*@ts-ignore*/}
                <confirmPopupInfoContext.Provider value={[confirmPopupInfo, setConfirmPopupInfo]}>
                    <Sidebar />
                    <MainContentPanel />

                    {confirmPopupInfo? <ConfirmPopup data={confirmPopupInfo}/> : null}
                </confirmPopupInfoContext.Provider>
            </SearchContext.Provider>
        </div>
    )
}