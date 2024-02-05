import './LoginPage.css';

import loginRequest from '../api/loginRequest';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../App';
import { useContext, useState } from 'react';

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // @ts-ignore
    const [token, setToken] = useContext(TokenContext);

    // @ts-ignore
    const handleLogin = (e) => {
        e.preventDefault();
        loginRequest(username, password)
        .then(({token})=>{
            setToken(token);
            navigate('/');
        }).catch(err=>{
            setError(err.message);
        });
    }

    return (
        <div className='LoginPage'>
            <form className='LoginPageForm' onSubmit={handleLogin}>
                <div className='ErrorDisplay'>{error}</div>
                <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit'></button>
            </form>
        </div>
    )
}