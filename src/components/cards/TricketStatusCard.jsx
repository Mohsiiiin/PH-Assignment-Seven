import React from 'react';

const TricketStatusCard = ({trickets, handleResolved}) => {


    return (
        <div className='rounded-xl p-5 shadow hover:shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>{trickets.title}</h3>
            <button onClick={()=> handleResolved(trickets)} className='bg-green-500 rounded px-10 py-2'><a href="#">Complete</a></button>
        </div>
    );
};

export default TricketStatusCard;