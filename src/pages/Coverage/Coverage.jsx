import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import LoadingPage from '../Shared/Loading/LoadingPage';


const Coverage = () => {
    const position = [23.8103, 90.4125];
    const serviceCenters = useLoaderData(); // This would be populated from the loader data in a real scenario
    const mapRef = useRef(null);
    // console.log(serviceCenters);





    const handelLocation = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const foundCenter = serviceCenters.find(center => center.district.toLowerCase().includes(location.toLowerCase()));
        if (foundCenter) {
            const coord = [foundCenter.latitude, foundCenter.longitude];
            console.log(foundCenter, coord);
            //goto the location
            mapRef.current.flyTo(coord, 14);
        }
    }

    //loading animation
    const { loading } = useAuth();
    if (loading) return <LoadingPage />;

    return (
        <div className=''>
            <div className='bg-base-100 rounded-3xl px-20 py-10'>

                {/* heading  */}
                <div className="">
                    <h2 className='text-3xl text-secondary font-bold mb-6'>We are available in 64 districts</h2>
                </div>

                {/* search  */}
                <form onSubmit={handelLocation} className="py-6">
                    <label className="input outline-none border-0 w-sm bg-base-300 rounded-full relative ">
                        <svg className="h-[1em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            name='location'
                            type="search"
                            placeholder="Search" />
                        <button type='submit' onSubmit={handelLocation} className='btn py-4 px-7 btn-primary  rounded-full text-secondary font-bold join-item absolute -right-4 '>Search</button>
                    </label>
                </form>

                {/*divider */}
                <div className="border-t-2 my-8 border border-secondary/10 mb-15"></div>



                {/* map  */}
                <div className="h-100 w-full mt-6 rounded-lg overflow-hidden">
                    <MapContainer
                        className='h-100 '
                        center={position}
                        zoom={7}
                        scrollWheelZoom={false}
                        ref={mapRef}
                    >
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