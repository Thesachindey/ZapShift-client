import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';
import SocialLogin from '../socialLogin/SocialLogin';



const Login = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm()
    const { signInUser } = useAuth();


    const handelLogin = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then((res) => {
                console.log(res.user)
                toast.success('Login success fully')
            })
            .catch((error) => {
                toast.error(error.code);
                console.log(error)
            })
    }
    return (
        <div className='flex flex-col justify-center items-center  h-full pb-10'>
            <div className="flex flex-col items-center justify-center py-4">
                <h3 className='text-4xl font-bold  '>Welcome back</h3>
                <p>Login with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handelLogin)}>
                <fieldset className="fieldset w-xs  p-4">
                    {/* <legend className="fieldset-legend">Login</legend> */}
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
                    <div className="flex justify-between items-center mt-1">
                        <p className="underline cursor-pointer hover:text-primary">
                            Forget Password?
                        </p>
                        <span></span>
                    </div>

                    <button className="btn btn-primary text-secondary mt-4">Login</button>
                    <div className="flex justify-between items-center mt-1">
                        <p className="">
                            Don’t have any account? <Link to={'/register'} className='text-primary cursor-pointer hover:text-primary/70'>Register</Link>
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

export default Login;