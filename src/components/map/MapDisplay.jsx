import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import '../../../node_modules/leaflet/dist/leaflet.css'
import { useState } from 'react'
import { Label } from '@radix-ui/react-label'

// Location Maker
function LocationMarker({ position, setPosition, setValue }) {

    const map = useMapEvents({
        click(e) {
            // console.log('latitude longitude =>', e.latlng)
            // map.locate()
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())

            if (setValue) {
                setValue('latitude', e.latlng.lat)
                setValue('longitude', e.latlng.lng)
            }
        },
        // locationfound(e) {      // แสดงตำแหน่งที่เราอยู่
        //   setPosition(e.latlng)
        //   map.flyTo(e.latlng, map.getZoom())
        // },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup> You are here </Popup>
        </Marker>
    )
}
// render(
//     <MapContainer
//         center={{ lat: 51.505, lng: -0.09 }}
//         zoom={13}
//         scrollWheelZoom={false}>
//         <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LocationMarker />
//     </MapContainer>,
// )


function MapDisplay({ register, location, setValue }) {

    const [position, setPosition] = useState(null)
    const DEFAULT_LOCATION = [18.810, 100.792]

    return (
        <>
            <div className='mt-4'>
                <Label> Map </Label>

                <div className='flex alig-center'>
                    <input readOnly {...register('latitude')} value={position ? 'Latitude: ' + position.lat.toFixed(3) : ''} />
                    <input readOnly {...register('longitude')} value={position ? 'Longitude: ' + position.lng.toFixed(3) : ''} />
                </div>
            </div>

            <div>
                <MapContainer
                    center={ location || DEFAULT_LOCATION }    // จุดกึ่งกลางแผนที่
                    zoom={13}
                    scrollWheelZoom={false}
                    className='w-12/12 h-[57vh] z-10 rounded-xl'
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Location Maker */}
                    <LocationMarker
                        position={position}
                        setPosition={setPosition}
                        setValue={setValue}
                    />

                    {/* ปักหมุด และแสดง Popup เมื่อคลิ๊กที่หมุด */}
                    {/* <Marker position={myHome}>
                        <Popup>
                            น่านเนิบ ๆ <br /> ล้ำไปก้าา.
                        </Popup>
                    </Marker> */}

                </MapContainer>
            </div>
        </>
    )
}

export default MapDisplay 