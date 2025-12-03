import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import { FileEdit } from 'lucide-react';
import { FaRegEdit } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BsFillTrash3Fill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    })
    console.log(parcels)


    const handelParcelDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then((res) => {
                        console.log(res)
                        if (res.data.deletedCount) {

                            refetch()

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel delivery request has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const handelPay = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
        console.log(res.data.url)
        // window.location.href = res.data.url;
        window.location.assign( res.data.url);
    }

    return (
        <div className='p-2 '>
            <div className="overflow-x-auto rounded-2xl bg-white">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((p, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{p.parcelName}</td>
                                    <td>{p.cost} Taka</td>
                                    <td>
                                        {
                                            p.paymentStatus === 'paid' ?
                                                <span className='text-green-400'>Paid</span>
                                                :
                                                // <Link to={`/dashboard/payment/${p._id}`}>
                                                <button onClick={() => handelPay(p)} className=' btn btn-primary btn-sm text-black'>Pay</button>
                                            // </Link>
                                        }
                                    </td>
                                    <td>{p.deliveryStatus}</td>
                                    <td className='flex flex-wrap gap-2'>
                                        <button className='btn btn-square hover:bg-primary'>
                                            <FaMagnifyingGlass />
                                        </button>
                                        <button className='btn btn-square hover:bg-primary '>
                                            <FaRegEdit />
                                        </button>
                                        <button
                                            onClick={() => handelParcelDelete(p._id)}
                                            className='btn btn-square hover:bg-primary'>
                                            <BsFillTrash3Fill />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;