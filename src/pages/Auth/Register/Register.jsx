import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handelRegistration = (data) => {
        console.log(data)
    }

    return (
        <div className='flex justify-center items-center h-full'>
            <form onSubmit={handleSubmit(handelRegistration)}>
                <fieldset className="fieldset  rounded-box w-xs border p-4">
                    {/* <legend className="fieldset-legend">Login</legend> */}
                    {/* email  */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                    {/* email validation  */}
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>
                    }

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/


                    })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Min length should be 6.</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must include Uppercase + Lowercase + Number + Special Character + No Spaces and minimum 6 characters.</p>
                    }
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;