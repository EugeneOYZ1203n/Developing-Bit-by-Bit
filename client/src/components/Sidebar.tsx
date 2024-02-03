import './Sidebar.css';

import SearchBar from './SearchBar';
import ContentHeaders from './ContentHeaders';

export default () => {
    return (
        <div className="Sidebar">
            <div className='Logo'>
                <p>Developing</p>
                <h1>Bit by Bit</h1>
            </div>
            <SearchBar />
            <ContentHeaders />
        </div>
    )
}