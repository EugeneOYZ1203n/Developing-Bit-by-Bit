import { API_URL } from "./config";

export default (username:string, password:string) => {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        })
    })
    .then(res => {
        if (res.ok){
            return res.json();
        } else {
            throw new Error('Login Failed')
        }
    });
}