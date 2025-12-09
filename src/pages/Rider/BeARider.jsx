import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import riderImg from '../../assets/agent-pending.png'

const BeARider = () => {
    const { register,
        handleSubmit,
        control,
        // formState: { errors }
    } = useForm();
    //
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    const serviceCenters = useLoaderData()
    const regionsMultiple = serviceCenters.map(c => c.region);  // region 
    const regions = [...new Set(regionsMultiple)];//yikhane duplicate item thakte parena

    const riderRegion = useWatch({ control, name: 'region' });
    // const receiverRegion = useWatch({ control, name: 'receiverRegion' });


    const districtsByRegion = (region) => {
        const districtsOfRegion = serviceCenters.filter(c => c.region === region);
        const districts = districtsOfRegion.map(d => d.district)
        return districts;

    }

    const handelRiderApplication = (data) => {
        console.log(data)
        axiosSecure.post('/riders', data)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Request to be a rider!",
                        text: "Your request has been successfully send for approved.",
                        icon: "success"
                    });
                    // navigate('/dashboard/approve-riders')
                    
                }
            })
    }

    return (
        <div className='bg-white rounded-3xl'>
            <div className='p-10 '>
                <form onSubmit={handleSubmit(handelRiderApplication)}>
                    <h1 className="text-4xl font-bold mb-3 text-secondary">Be a Rider</h1>
                    <p className="text-sm mb-8 text-gray-600">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br /> From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    {/* divider  */}
                    <div className='divider'></div>

                    {/* two column */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 my-6'>
                        {/* Sender Details */}
                        <div className="">
                            <h1 className='text-2xl font-semibold'>Tell us about yourself</h1>

                            <fieldset className="fieldset ">
                                {/* Sender Name  */}
                                <label className="label mt-2">Your Name</label>
                                <input defaultValue={user?.displayName} type="text" className="input w-full" {...register('riderName')} placeholder="Your Name" />
                                {/* Driving License Number  */}
                                <label className="label mt-2">Driving License Number</label>
                                <input type="number" className="input w-full" {...register('drivingLicenseNumber')} placeholder="Driving License Number" />

                                {/* Your email  */}
                                <label className="label mt-2">Your Email</label>
                                <input defaultValue={user?.email} type="email" className="input w-full" {...register('riderEmail')} placeholder="Your Email" />
                                {/* Sender Address  */}
                                <label className="label mt-2">Your Address</label>
                                <input type="text" className="input w-full" {...register('address')} placeholder="Your Address" />
                                {/*  Phone No  */}
                                <label className="label mt-2"> Phone No</label>
                                <input type="number" className="input w-full" {...register('phoneNo')} placeholder=" Phone No" />
                                {/* NID No  */}
                                <label className="label mt-2">NID No</label>
                                <input type="number" className="input w-full" {...register('nidNo')} placeholder="NID No" />
                                {/* Bike Brand Model and Year*/}
                                <label className="label mt-2">Bike Brand Model and Year</label>
                                <input type="text" className="input w-full" {...register('bikeDetails')} placeholder="Bike Brand Model and Year" />
                                {/* Bike Registration Number*/}
                                <label className="label mt-2">Bike Registration Number</label>
                                <input type="number" className="input w-full" {...register('bikeRegNo')} placeholder="Bike Registration Number" />

                                {/*Dynamic Rider Region */}
                                <label className="label mt-2">Your Region</label>
                                <select
                                    defaultValue=""
                                    {...register("region", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select your region
                                    </option>

                                    {/* Bangladesh 8 region */}
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

                                {/*Dynamic Your District  */}
                                <label className="label mt-2">Your District</label>
                                <select
                                    defaultValue=""
                                    {...register("district", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select your district
                                    </option>

                                    {/*  Dynamic districts by region */}
                                    {
                                        districtsByRegion(riderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }

                                </select>

                                {/* Tell Us About Yourself */}
                                <label className="label mt-2">Tell Us About Yourself</label>
                                <textarea
                                    {...register("riderInfo")}
                                    className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:border-primary resize-none"
                                    placeholder="Tell Us About Yourself"
                                    rows={3}

                                />

                            </fieldset>
                        </div>

                        {/* divider  */}
                        <div className='divider  md:hidden'></div>

                        {/* Receiver Details */}
                        <div className="place-items-center">
                            <img src={riderImg} alt="" />
                        </div>
                        <input className='btn btn-primary my-6 text-white' type="submit" value='Submit' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BeARider;