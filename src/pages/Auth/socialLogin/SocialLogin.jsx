import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();


    const handelGoogleSignIn = () => {
        signInGoogle()
            .then((res) => {
                console.log(res.user);
                toast.success("Sign In with google successfully. ");


                const userInfo = {
                    email: res.user.email,
                    displayName: res.user.name,
                    photoURl: res.user.photoURL
                }

                //create user in data base
                axiosSecure.post('/users', userInfo)
                    .then((res) => {
                        console.log('user data has been stored ', res.data)
                        // navigate 
                        navigate(location?.state || '/')
                    })

            })
            .catch((error) => {
                console.log(error.code)
                toast.error(error.code);
            })
    }

    return (
        <div >
            <button onClick={handelGoogleSignIn} className="btn w-full shadow-none border-0 bg-secondary/15 hover:bg-secondary/20 text-secondary mt-4"> <FcGoogle size={24} /> Login with google</button>
        </div>
    );
};

export default SocialLogin;