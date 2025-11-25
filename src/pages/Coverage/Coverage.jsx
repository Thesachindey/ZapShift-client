import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';


const Coverage = () => {
    const position = [23.8103, 90.4125];
    const serviceCenters = useLoaderData(); // This would be populated from the loader data in a real scenario
    console.log(serviceCenters);
    return (
        <div className=''>
            <div className='bg-base-100 rounded-3xl px-20 py-10'>

                {/* heading  */}
                <div className="">
                    <h2 className='text-3xl text-secondary font-bold mb-6'>We are available in 64 districts</h2>
                </div>
                {/* search  */}
                <div className="">

                </div>
                {/* map  */}
                <div className="h-100 w-full mt-6 rounded-lg overflow-hidden">
                    <MapContainer className='h-100 ' center={position} zoom={7} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            serviceCenters.map((center, i) => (
                                <Marker key={i} position={[center.latitude, center.longitude]}>
                                    <Popup>
                                     <strong>{center.district}</strong> <br /> Service area: {center.covered_area.join(', ')}
                                    </Popup>
                                </Marker>
                            ))
                        }

                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Coverage;