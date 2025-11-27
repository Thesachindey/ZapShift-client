import React from 'react';
import useAuth from '../Hooks/useAuth';
import LoadingPage from '../pages/Shared/Loading/LoadingPage';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingPage />
    }
    if (!user) {
        return <Navigate to='/login' />
    }


    return children;
};

export default PrivateRoute;