import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaShieldHalved, FaUserShield } from 'react-icons/fa6';
import { FiShieldOff } from "react-icons/fi";

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })
    console.log(users)
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

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>

                                <tr>
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

                                    <th className='flex gap-2 flex-wrap'>
                                        {user.role === 'admin' ?
                                            <button className='btn btn-xs tooltip' data-tip="Remove from admin">
                                                <FiShieldOff />
                                            </button>
                                            :
                                            <button className='btn btn-xs tooltip' data-tip="Make an admin">
                                                <FaUserShield />
                                            </button>}
                                    </th>
                                </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UsersManagement;