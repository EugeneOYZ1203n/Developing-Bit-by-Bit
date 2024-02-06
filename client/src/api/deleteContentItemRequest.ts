import { API_URL } from "./config";

export default (token:string, _id: string) => {
    return fetch(`${API_URL}/content/${_id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
        },
    })
}