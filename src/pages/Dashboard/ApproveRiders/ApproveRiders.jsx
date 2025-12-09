import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaEye, FaUserCheck, FaUserMinus } from 'react-icons/fa6';
import { BsFillTrash3Fill } from 'react-icons/bs';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })


    const updateRiderStatus = (rider, status) => {
console.log(rider.riderEmail)
        const updateInfo = { status: status, email: rider.riderEmail }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Update rider status!",
                        text: `You are successfully ${status} the rider.`,
                        icon: "success"
                    });
                }
            })
    }





    const handelApproval = (rider) => {
        updateRiderStatus(rider, 'approved')
    }

    const handelRejection = (rider) => {
        updateRiderStatus(rider, 'rejected')
    }

    const handelDelete = (id) => {
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
                axiosSecure.delete(`/riders/${id}`)
                    .then((res) => {
                        console.log(res)
                        if (res.data.deletedCount) {

                            refetch()

                            Swal.fire({
                                title: "Deleted!",
                                text: "You are successfully remove this request.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className='p-10'>
            <h1 className="text-4xl font-bold mb-3 text-secondary">Riders pending approval:{riders.length}</h1>

            {/* divider  */}
            <div className='divider'></div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            riders.map((rider, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{rider.riderName}</td>
                                    <td>{rider.riderEmail}</td>
                                    <td>{rider.district}</td>
                                    <td>
                                        <p className={`${rider.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>{rider.status}</p>
                                    </td>
                                    <td className='flex gap-2 flex-wrap'>
                                        <button  className="btn tooltip" data-tip="Vew details">
                                            <FaEye />
                                        </button>
                                        <button onClick={() => handelApproval(rider)} className="btn tooltip" data-tip="Accept">
                                            <FaUserCheck />
                                        </button>

                                        <button onClick={() => handelRejection(rider)} className="btn tooltip" data-tip="Reject">
                                            <FaUserMinus />
                                        </button>

                                        <button onClick={() => handelDelete(rider._id)} className="btn tooltip" data-tip="Remove from list">
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

export default ApproveRiders;