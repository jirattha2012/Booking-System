import axios from 'axios'

export async function createCamping(data, token) {
    // console.log('Camping data = ', data)

    return await axios.post('http://localhost:5000/api/camping', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export async function getCampingList() {
    return await axios.get('http://localhost:5000/api/camping')
}