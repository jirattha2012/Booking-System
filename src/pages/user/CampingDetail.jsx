import { getCampingById } from "@/api/campingService"
import { useEffect, useState } from "react"
import { useParams } from "react-router"


function CampingDetail() {
    const { landmark_id } = useParams()
    const [ camping, setCamping] = useState()

    
    useEffect(() => {
        fetchCampingId(landmark_id)
    }, [])

    const fetchCampingId = async (id) => {
        try {
            const res = await getCampingById(id)
            setCamping(res.data.result)
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1> Camping Detail </h1>
        </div>
    )
}

export default CampingDetail
