import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='text-5xl'>Payment History page:{payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, i) =>
                             <tr>
                                    <th>{i+1}</th>
                                    <td>{payment.parcelName}</td>
                                    <td>$ {payment.amount}</td>
                                    <td>{payment.transactionId}</td>
                                </tr>,
                                console.log(payments)
                                )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;