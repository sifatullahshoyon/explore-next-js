import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="w-10 h-10 flex gap-2 items-center justify-center"><div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div><div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div><div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div></div>



        </div>
    );
};

export default loading;