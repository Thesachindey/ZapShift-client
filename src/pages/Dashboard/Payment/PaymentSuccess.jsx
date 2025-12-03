import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setPaymentInfo({

                        transactionId: res.data.transactionId,
                        trackingId: res.data.trackingId
                    })
                })

        }
    }, [sessionId, axiosSecure])

    return (
        <div>
            <h3 className='text-4xl'>Payment Successful.</h3>
            <p>Your TransactionId: {paymentInfo.transactionId}</p>
            <p>Your TrackingId: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;
