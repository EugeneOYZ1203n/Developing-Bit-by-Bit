
import { useContext } from 'react';
import './SearchBar.css';
import { SearchContext } from '../pages/ContentPage';

export default () => {
    //@ts-ignore
    const [searchString, setSearchString] = useContext(SearchContext)

    return (
        <div className="SearchBar">
            <input type="text" placeholder='Search...' onChange={e=>setSearchString(e.target.value)}/>
        </div>
    )
}