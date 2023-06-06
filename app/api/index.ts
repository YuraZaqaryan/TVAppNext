import axios from "axios";

const fetchUsers = async (id: number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response.json()
    }
    catch (e) {
        console.log(e)
    }
}
export {fetchUsers}