import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../Shared/Loading/LoadingPage';

const Payment = () => {
    const { pId } = useParams();
    console.log(pId)
    const axiosSecure = useAxiosSecure();

    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcels', pId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${pId}`);
            return res.data;
        }
    });

    const handelPayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)

        console.log(res.data)
        window.location.href = res.data.url;

    }


    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className='p-2'>
            <div className="bg-white rounded-2xl p-20">
                <h2>
                    Please pay ${parcel.cost} for: {parcel.parcelName}
                </h2>
                <button onClick={handelPayment} className='btn btn-primary text-black'>Pay</button>
            </div>
        </div >
    );
};

export default Payment;