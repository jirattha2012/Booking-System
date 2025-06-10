import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, LayersControl, LayerGroup, Tooltip } from 'react-leaflet'
import { getCampingList } from '@/api/campingService'


function MapHome() {
    const [landmarks, setLandmarks] = useState([])

    useEffect(() => {
        handleCampingList()
    }, [])

    const handleCampingList = () => {
        getCampingList()
            .then((res) => {
                setLandmarks(res.data.result)
                // console.log(res.data.result)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h1> Map Home </h1>

            <MapContainer center={[13.75, 100.50]} zoom={8} scrollWheelZoom={true} className='w-11/12 h-[64vh] z-10 rounded-xl'>
                {/* แสดงแนที่ */}
                <LayersControl>
                    <LayersControl.BaseLayer name="OSM" checked>
                        <TileLayer
                            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name="Satellite">
                        <TileLayer
                            // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>

                    {/* Overlay layer กรองข้อมูล (เหมือน checkbox) */}
                    <LayersControl.Overlay name="Landmark" checked>
                        <LayerGroup>
                            {/* ปักหมุด */}
                            {landmarks.map((item, index) => {
                                return (
                                    <Marker key={index} position={[item.latitude, item.longitude]}>
                                        <Popup>
                                            {item.title} <br />
                                            {item.description}
                                        </Popup>
                                        <Tooltip>
                                            {item.title}
                                        </Tooltip>
                                    </Marker>
                                )
                            })}
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>

                
            </MapContainer>
        </div>
    )
}

export default MapHome
