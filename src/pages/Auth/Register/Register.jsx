import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import SocialLogin from '../socialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const { registerUser } = useAuth()

    const handelRegistration = (data) => {
        console.log(data)
        registerUser(data.email, data.password)
            .then((res) => {
                toast.success('Registration successful.')
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.code);
            })
    }

    return (

        <div className='flex flex-col justify-center items-center  h-full pb-10'>
            <div className="flex flex-col items-center justify-center py-4">
                <h3 className='text-4xl font-bold  '>Create an Account</h3>
                <p>Register with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handelRegistration)}>
                <fieldset className="fieldset w-xs  p-4">
                    {/* <legend className="fieldset-legend">Login</legend> */}

                    {/* name  */}
                    <label className="label">Name</label>
                    <input {...register("name", { required: true, minLength: 4 })} type="text" className="input" placeholder="Your name" />
                    {/* name validation  */}
                    {errors.name?.type === "required" && (
                        <p role="alert" className='text-red-500'>Name is required.</p>
                    )}
                    {errors.name?.type === "minLength" && (
                        <p role="alert" className='text-red-500'>Name must be at least 4 characters.</p>
                    )}

                    {/* img  */}

                    <label className="label">Image</label>
                    <input
                        {...register("image", { required: true })}
                        type="file"
                        
                        className="file-input file:bg-primary file:text-white file:border-0"
                    />

                    {/* email validation  */}
                    {errors.image?.type === "required" && (
                        <p role="alert" className='text-red-500'>Image is required.</p>
                    )}
                    {/* email  */}
                    <label className="label">Email</label>
                    <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                    {/* email validation  */}
                    {errors.email?.type === "required" && (
                        <p role="alert" className='text-red-500'>Email is required.</p>
                    )}

                    {/* password  */}
                    <label className="label">Password</label>
                    <input {...register("password", {
                        required: true, minLength: 6, pattern: /^(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,20}$/,
                    })} type="password" className="input" placeholder="Password" />
                    {/* pass validation  */}
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least 6 characters.</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must include Uppercase + Lowercase + Number + Special Character + No Spaces and minimum 8 characters.</p>}

                    <button className="btn btn-primary text-secondary mt-4">Register</button>
                    <div className="flex justify-between items-center mt-1">
                        <p className="">
                            Already have an account? <Link to={'/login'} className='text-primary cursor-pointer hover:text-primary/70'>Login</Link>
                        </p>
                        <span></span>
                    </div>
                    <div className="divider">OR</div>
                    <div className="">
                        {/* social login  */}
                        <SocialLogin />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;