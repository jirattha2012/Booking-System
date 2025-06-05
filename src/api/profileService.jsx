import axios from 'axios'

export async function createProfile(data, token) {
    console.log('Profile data = ', data)

    return await axios.post('http://localhost:5000/api/profile', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}