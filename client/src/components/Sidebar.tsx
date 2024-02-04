import './Sidebar.css';

import SearchBar from './SearchBar';
import ContentHeader from './ContentHeader';

export default () => {
    const chapters:Array<{name: String, titles: Array<String>}> = [{
        name: "Algorithms",
        titles: ["Arrays", "Lists", "Binary Search"]
    },
    {
        name: "React",
        titles: ["Query", "Spinner", "Router"]
    },
    {
        name: "React",
        titles: ["Query", "Spinner", "Router"]
    },
    {
        name: "React",
        titles: ["Query", "Spinner", "Router"]
    },
    {
        name: "React",
        titles: ["Query", "Spinner", "Router"]
    }]

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

            <div className='ScrollTitle'>
                {chapters.map((chapter, i) => {
                    return <ContentHeader chapter={chapter} isAdmin={isAdmin} key={chapter.name+String(i)}/>
                })}
                {isAdmin ? <div><button className='editButton addButton'>{"\[ add new title \]"}</button></div>: null}
            </div>
        </div>
    )
}