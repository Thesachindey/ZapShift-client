import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handelGoogleSignIn = () => {
        signInGoogle()
            .then((res) => {
                console.log(res);
                toast.success("Sign In with google successfully. ");
                // navigate 
                navigate(location?.state || '/')
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