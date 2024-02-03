import './Sidebar.css';

import SearchBar from './SearchBar';
import ContentHeaders from './ContentHeaders';

export default () => {
    return (
        <div className="Sidebar">Sidebar
            <div className='Logo'>Logo</div>
            <SearchBar />
            <ContentHeaders />
        </div>
    )
}