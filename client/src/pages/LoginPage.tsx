import './LoginPage.css';

export default () => {
    return (
        <div className='LoginPage'>
            <form className='LoginPageForm'>
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />
                <button type='submit'></button>
            </form>
        </div>
    )
}