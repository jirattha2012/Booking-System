import MapHome from "@/components/map/MapHome"
import { useEffect, useState } from "react"
import { getCampingList } from "@/api/campingService"
import useCampingStore from "@/store/campingStore"
import { motion } from "motion/react"
import { Link } from "react-router"

function Home() {
    const [landmarks, setLandmarks] = useState([])
    console.log(landmarks)

    const campingStore = useCampingStore((state) => state.campings)
    const actionCampingListStore = useCampingStore((state) => state.actionCampingList)  // แสดงข้อมูลเหมือนฟังก์ชัน fetchCampingList แต่เป็น Global

    useEffect(() => {
        fetchCampingList()
        actionCampingListStore()
    }, [])

    const fetchCampingList = async () => {
        try {
            const res = await getCampingList()
            setLandmarks(res.data.result)
            // console.log(res.data.result)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div>
                <MapHome />
            </div>

            {
                <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-10">
                    {
                        landmarks.map((item, index) => (
                            <article key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <Link to={`/user/camping/${item.landmark_id}`}>
                                        <div
                                            className="flex flex-col items-center h-full w-[90%] px-2 py-4 rounded-xl
                                                hover:scale-105 hover:duration-100 hover:shadow-md"
                                        >
                                            <div>
                                                <img src={item.secure_url ? item.secure_url : 'https://kokorojapanstore.com/cdn/shop/articles/Main_1024x1024.jpg?v=1621342920'} className="h-[250px] object-cover rounded-xl" />
                                            </div>

                                            <div className='w-full pt-3'>
                                                <h1 className="font-bold text-base"> {item.title} </h1>
                                                <p className="mt-1"> {item.description} </p>
                                                <div className="flex flex-rows items-center mt-1">
                                                    <p> ราคา {Number(item.price).toLocaleString()} ฿ </p>
                                                </div>
                                                <p className="mt-1"> หมวดหมู่: {item.category} </p>
                                            </div>
                                        </div>
                                    </Link>

                                </motion.div>
                            </article>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default Home