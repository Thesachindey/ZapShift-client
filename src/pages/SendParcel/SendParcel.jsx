import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendParcel = () => {
    const { register,
        handleSubmit,
        control,
        // formState: { errors }
    } = useForm();
    //
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

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


        const isDocument = data.parcelType === "document";
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;

        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (parcelWeight <= 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict
                    ? extraWeight * 40
                    : extraWeight * 40 + 40;

                cost = minCharge + extraCharge;
            }
        }

        console.log("cost", cost);
        // 🎯 SweetAlert2 Confirmation Popup (CUSTOMIZED)
        Swal.fire({
            title: "Confirm Parcel Booking",
            html: `
            <div style="text-align:left">
                <p><b>Parcel Type:</b> ${data.parcelType}</p>
                <p><b>Weight:</b> ${data.parcelWeight} KG</p>
                <p><b>From:</b> ${data.senderDistrict}</p>
                <p><b>To:</b> ${data.receiverDistrict}</p>
                <p><b>Delivery Cost:</b> <span style="color:#3085d6;font-weight:bold">${cost} BDT</span></p>
            </div>
        `,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Booking",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {

                // ⭐ Add custom fields here
                const finalData = {
                    ...data,
                    createdAt: new Date(),
                    userEmail: user.email,
                    cost: cost,

                };

                // TODO: Call API here to create parcel
                //save the parcel info to the data base
                axiosSecure.post('/parcels', finalData)
                    .then((res) => {
                        console.log('after saving parcels', res.data)
                    })



                //sweet alert
                Swal.fire({
                    title: "Parcel Booked!",
                    text: "Your parcel has been successfully scheduled for delivery.",
                    icon: "success"
                });
            }
        });




    };


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
                                <input defaultValue={user?.displayName} type="text" className="input w-full" {...register('senderName')} placeholder="Sender Name" />
                                {/* Sender email  */}
                                <label className="label mt-2">Sender Email</label>
                                <input defaultValue={user?.email} type="email" className="input w-full" {...register('senderEmail')} placeholder="Sender Email" />
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
                                        Select your region
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
                                        Select receiver region
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