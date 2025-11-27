import React from 'react';
import { CircularProgress } from 'react-loader-spinner';

const LoadingPage = () => {
    return (
        <div className='min-h-screen'>
            <CircularProgress
                height="100"
                width="100"
                className='text-primary'
                ariaLabel="circular-progress-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
                strokeWidth={2}
                animationDuration={1}
            />
        </div>
    );
};

export default LoadingPage;