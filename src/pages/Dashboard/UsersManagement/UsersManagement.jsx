import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaShieldHalved, FaUserShield } from 'react-icons/fa6';
import { FiShieldOff } from "react-icons/fi";
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })
    console.log(users)

const handleMakeAdmin = user => {
    const roleInfo = { role: 'admin' }
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
        .then(res => {
            console.log("PATCH RESULT:", res.data);

            if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: `${user.displayName} is now an admin.`,
                    icon: "success"
                });
            }
        })
        .catch(err => {
            console.log("PATCH ERROR:", err);
            Swal.fire("Error", "Failed to update role", "error");
        });
};

const handleRemoveAdmin = user => {
    const roleInfo = { role: 'user' };
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: `${user.displayName} is no longer an admin.`,
                    icon: "success"
                });
            }
        });
};


    return (
        <div>
            <h1 className='text-4xl'>Manage Users: {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin action</th>
                            <th>Other Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>

                                <tr key={i}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photoURL}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.displayName}</div>
                                                <div className="text-sm opacity-50">{user.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>

                                    <td className='flex gap-2 flex-wrap'>
                                        {user.role === 'admin' ?
                                            <button
                                            onClick={()=>handleRemoveAdmin(user)}
                                             className='btn btn-xs text-red-500 tooltip' data-tip="Remove from admin">
                                                <FiShieldOff />
                                            </button>
                                            :
                                            <button
                                            onClick={()=>handleMakeAdmin(user)}
                                             className='btn btn-xs text-green-500 tooltip' data-tip="Make an admin">
                                                <FaUserShield />
                                            </button>}
                                    </td>
                                    <td>
                                        Actions
                                    </td>
                                </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UsersManagement;