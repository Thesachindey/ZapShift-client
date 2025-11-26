import React from 'react';

const btn = () => {
    return (
        <div>
            {/* btn  */}
            <Link className='btn px-5 border-0 rounded-lg text-center btn-primary text-secondary relative'>Be a rider <span className=' absolute -right-11 rotate-45 p-3 bg-secondary rounded-full text-primary text-xl'><FaArrowUp /></span></Link>
        </div>
    );
};

export default btn;