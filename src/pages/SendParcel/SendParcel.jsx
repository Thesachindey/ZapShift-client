import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const { register, handleSubmit, control, formState: { errors }, } = useForm();
    const serviceCenters = useLoaderData()
    const regionsMultiple = serviceCenters.map(c => c.region);  // region 
    const regions = [...new Set(regionsMultiple)];//yikhane duplicate item thakte parena
    //memoizing problem
    // const senderRegion = watch('senderRegion');
    // const receiverRegion = watch('receiverRegion');
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });


    const districtsByRegion = (region) => {
        const districtsOfRegion = serviceCenters.filter(c => c.region === region);
        const districts = districtsOfRegion.map(d => d.district)
        return districts;

    }



    const handelSendParcel = (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className='bg-white p-10 rounded-3xl'>
                <div className=" flex flex-col gap-6 justify-center">
                    <h1 className='text-4xl font-bold'>Send A Parcel</h1>
                    <h2 className='text-2xl font-bold'>Enter your parcel details</h2>
                </div>

                <div className="py-10">
                    {/*divider */}
                    <div className="border-t-2 border-dashed border-secondary/40 "></div>
                </div>

                <form onSubmit={handleSubmit(handelSendParcel)}>
                    {/* parcel type  */}
                    <div>
                        <label className='mr-4 space-x-2' >
                            <input type="radio" {...register("parcelType")} value='document' className="radio mr-2" defaultChecked />
                            Document
                        </label>
                        <label className='' >
                            <input type="radio" {...register("parcelType")} value='non-document' className="radio mr-2" />
                            Non Document
                        </label>
                    </div>

                    {/* parcel name and weight */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 my-6'>
                        <fieldset className="fieldset">
                            <label className="label">Parcel Name</label>
                            <input type="text" className="input w-full" {...register('parcelName')} placeholder="Parcel Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Parcel Weight (KG)</label>
                            <input type="number" className="input w-full" {...register('parcelWeight')} placeholder="Parcel Weight (KG)" />
                        </fieldset>
                    </div>
                    {/* divider  */}
                    <div className='divider'></div>

                    {/* two column */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 my-6'>
                        {/* Sender Details */}
                        <div className="">
                            <h1 className='text-2xl font-semibold'>Sender Details</h1>

                            <fieldset className="fieldset ">
                                {/* Sender Name  */}
                                <label className="label mt-2">Sender Name</label>
                                <input type="text" className="input w-full" {...register('senderName')} placeholder="Sender Name" />
                                {/* Sender email  */}
                                <label className="label mt-2">Sender Email</label>
                                <input type="email" className="input w-full" {...register('senderEmail')} placeholder="Sender Email" />
                                {/* Sender Address  */}
                                <label className="label mt-2">Sender Address</label>
                                <input type="text" className="input w-full" {...register('senderAddress')} placeholder="Sender Address" />
                                {/* Sender Phone No  */}
                                <label className="label mt-2">Sender Phone No</label>
                                <input type="number" className="input w-full" {...register('senderPhoneNo')} placeholder="Sender Phone No" />

                                {/*Dynamic Sender Region */}
                                <label className="label mt-2">Sender Region</label>
                                <select
                                    defaultValue=""
                                    {...register("senderRegion", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select your district
                                    </option>

                                    {/* Bangladesh 8 region */}
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

                                {/*Dynamic Your District  */}
                                <label className="label mt-2">Sender District</label>
                                <select
                                    defaultValue=""
                                    {...register("senderDistrict", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select your district
                                    </option>

                                    {/*  Dynamic districts by region */}
                                    {
                                        districtsByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }

                                </select>

                                {/* Pickup Instruction */}
                                <label className="label mt-2">Pickup Instruction</label>
                                <textarea
                                    {...register("pickupInstruction")}
                                    className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:border-primary resize-none"
                                    placeholder="Pickup Instruction"
                                    rows={4}

                                />

                            </fieldset>
                        </div>

                        {/* divider  */}
                        <div className='divider  md:hidden'></div>

                        {/* Receiver Details */}
                        <div className="">
                            <h1 className='text-2xl font-semibold'>Receiver Details</h1>

                            <fieldset className="fieldset ">
                                {/* Receiver Name  */}
                                <label className="label mt-2">Receiver Name</label>
                                <input type="text" className="input w-full" {...register('receiverName')} placeholder="Receiver Name" />
                                {/* Receiver email  */}
                                <label className="label mt-2">Receiver Email</label>
                                <input type="email" className="input w-full" {...register('receiverEmail')} placeholder="Receiver Email" />
                                {/* Receiver Address  */}
                                <label className="label mt-2">Receiver Address</label>
                                <input type="text" className="input w-full" {...register('receiverAddress')} placeholder="Receiver Address" />
                                {/* Receiver Phone No  */}
                                <label className="label mt-2">Receiver Contact No</label>
                                <input type="number" className="input w-full" {...register('receiverPhoneNo')} placeholder="Receiver Contact No" />
                                {/*Dynamic Receiver Region */}
                                <label className="label mt-2">Receiver Region</label>
                                <select
                                    defaultValue=""
                                    {...register("receiverRegion", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select receiver district
                                    </option>

                                    {/* Bangladesh 8 region */}
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>

                                {/*Dynamic Receiver District  */}
                                <label className="label mt-2">Receiver District</label>
                                <select
                                    defaultValue=""
                                    {...register("receiverDistrict", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        Select receiver district
                                    </option>

                                    {/*  Dynamic districts by region */}
                                    {
                                        districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }

                                </select>
                                {/* Delivery Instruction */}
                                <label className="label mt-2">Delivery Instruction</label>
                                <textarea
                                    {...register("deliveryInstruction")}
                                    className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:border-primary resize-none"
                                    placeholder="Delivery Instruction"
                                    rows={4}

                                />

                            </fieldset>
                        </div>
                    </div>

                    <input className='btn btn-primary my-6 text-white' type="submit" value='send-parcel' />
                </form>
            </div>
        </div>
    );
};

export default SendParcel;