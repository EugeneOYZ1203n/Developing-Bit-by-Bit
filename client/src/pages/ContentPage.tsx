import './ContentPage.css';

import MainContentPanel from '../components/MainContentPanel'
import Sidebar from '../components/Sidebar'

export default () => {
    return (
        <div className='ContentPage'>
            <Sidebar />
            <MainContentPanel />
        </div>
    )
}