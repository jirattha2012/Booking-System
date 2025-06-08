import axios from 'axios'

export const uploadFile = async (file, token) => {
    return await axios.post('http://localhost:5000/api/uploadFile',
        { file: file },
        { headers: { Authorization: `Bearer ${token}` } }
    )
}