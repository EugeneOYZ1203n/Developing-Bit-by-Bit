import { API_URL } from "./config";

export default (token:String) => {
    return fetch(`${API_URL}/content`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    })
    .then(res => res.json());
}